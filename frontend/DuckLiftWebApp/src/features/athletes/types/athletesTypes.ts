export type Athlete = {
  /** Id of the athlete */
  id: string;
  /** Lastname of the athlete */
  lastname: string;
  /** Firstname of the athlete */
  name: string;
  /** Email of the athlete */
  email: string;
  /** Birthday of the athlete */
  birthday: Date;
  /** Date creatio of the athlete */
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
  /** Sex category of the Athlete */
  sexCategorie?: string;
  /** Competition level of the Athlete (regional, national, rookie) */
  level?: string;
  /** BodyWeight of the Athlete */
  bodyWeight?: number;
  /** Club of the Athlete */
  club?: string;
  /** Country of the Athlete */
  country?: string;
};
