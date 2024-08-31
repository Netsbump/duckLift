import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  /**
   * Injection de dépendances via le constructeur (Constructor Injection)
   *
   * @param userRepository - Repository pour l'entité User
   *
   * Explication du concept d'IoC (Inversion of Control) et DI (Dependency Injection) :
   *
   * 1. IoC : C'est un principe où le flux de contrôle d'une application est inversé.
   *    Au lieu que la classe crée ses propres dépendances, elles sont "injectées" de l'extérieur.
   *
   * 2. DI : C'est une technique d'IoC où les dépendances sont fournies à une classe
   *    plutôt que la classe les créant elle-même.
   *
   * 3. @InjectRepository(User) : C'est un décorateur NestJS qui indique au conteneur IoC
   *    quelle instance de Repository injecter.
   *
   * 4. private userRepository: Repository<User> : Déclare et initialise la propriété
   *    userRepository comme une dépendance injectée.
   *
   * Avantages :
   * - Découplage : La classe ne dépend pas d'une implémentation spécifique du Repository.
   * - Testabilité : Facilite les tests unitaires en permettant l'injection de mocks.
   * - Flexibilité : Permet de changer facilement l'implémentation du Repository sans modifier cette classe.
   *
   * NestJS gère automatiquement l'instanciation et l'injection de ces dépendances,
   * simplifiant ainsi la gestion des dépendances dans l'application.
   */
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async register(email: string, password: string): Promise<User> {
    //Validate email
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email formal');
    }

    //Hashing password
    const hashedPassword = await this.hashPassword(password);

    //Create user
    const user = this.usersRepository.create({
      email: email.toLocaleLowerCase(),
      hashedPassword,
    });
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneById(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with ID $(id) not found`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async findAllIncludingDeleted(): Promise<User[]> {
    return this.usersRepository.find({ withDeleted: true });
  }

  async updateEmail(id: number, newEmail: string): Promise<User> {
    if (!this.isValidEmail(newEmail)) {
      throw new BadRequestException('Invalid email format');
    }
    const user = await this.findOneById(id);
    user.email = newEmail;

    try {
      return await this.usersRepository.save(user);
    } catch (error) {
      // Vérifiez si l'erreur est due à une violation de contrainte d'unicité
      if (error.code === '23505') {
        // Code PostgreSQL pour violation de contrainte unique
        throw new ConflictException('Email already in use');
      }
      throw error; // Relancer d'autres types d'erreurs
    }
  }

  async checkpassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.hashedPassword);
  }

  async delete(id: number): Promise<void> {
    await this.findOneById(id); // Ceci lancera une NotFoundException si l'utilisateur n'existe pas
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async softDelete(id: number): Promise<void> {
    await this.findOneById(id); // Ceci lancera une NotFoundException si l'utilisateur n'existe pas
    await this.usersRepository.softDelete(id);
  }

  async permanentlyDelete(id: number): Promise<void> {
    await this.findOneById(id); // Ceci lancera une NotFoundException si l'utilisateur n'existe pas
    await this.usersRepository.delete(id);
  }

  async restore(id: number): Promise<void> {
    // Pour restore, on pourrait vouloir vérifier si l'utilisateur est bien soft-deleted
    const user = await this.usersRepository.findOne({
      where: { id },
      withDeleted: true,
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    if (!user.deletedAt) {
      throw new BadRequestException(`User with ID ${id} is not deleted`);
    }
    await this.usersRepository.restore(id);
  }

  private isValidEmail(email: string): boolean {
    return email.includes('@');
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
