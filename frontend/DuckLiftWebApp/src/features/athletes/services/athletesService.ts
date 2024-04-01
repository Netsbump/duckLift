import { faker } from "@faker-js/faker";
import { Athlete } from "../types/athletesTypes";

// Fonction pour simuler la récupération d'athlètes
export const getFakeAthletes = (): Athlete[] => {
  // Créez un tableau pour stocker les athlètes générés
  const athletes: Athlete[] = [];

  // Boucle pour générer un certain nombre d'athlètes
  for (let i = 0; i < 10; i++) {
    athletes.push({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      lastname: faker.person.lastName(),
      dateCreation: faker.date.past(),
      avatar: faker.image.avatar(),
      age: faker.number.int({ min: 18, max: 60 }),
      maxArr: faker.number.int({ min: 50, max: 200 }),
      maxEpj: faker.number.int({ min: 50, max: 300 }),
      categorie: faker.helpers.arrayElement(["59kg", "71g", "95kg"]),
      level: faker.helpers.arrayElement(["Regional", "National", "Rookie"]),
      bodyWeight: faker.number.int({ min: 50, max: 120 }),
    });
  }

  // Retournez le tableau d'athlètes générés
  return athletes;
};
