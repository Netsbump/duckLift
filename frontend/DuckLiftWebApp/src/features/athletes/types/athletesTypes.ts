export type Athlete = {
  /** Id of the athlete */
  id: string;
  /** Lastname of the athlete */
  lastname: string;
  /** Firstname of the athlete */
  name: string;
  /** Birthdate of the athlete */
  dateCreation: Date;
  /** Avatar of the athlete */
  avatar?: string;
  /** Age of the athlete */
  age?: number;
  /** Maximum Snatch of the Athlete */
  maxArr?: number;
  /** Maximum Clean and Jerk of the Athlete */
  maxEpj?: number;
  /** Weight category of the Athlete */
  categorie?: string;
  /** Competition level of the Athlete (regional, national, rookie) */
  level?: string;
  /** BodyWeight of the Athlete */
  bodyWeight?: number;
};
