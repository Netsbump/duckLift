import { useState, useEffect } from "react";
import { getFakeAthletes } from "../services/athletesService";
import { Athlete } from "../types/athletesTypes";

export const useAthletes = (): Athlete[] => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    const fakeAthletes = getFakeAthletes();
    setAthletes(fakeAthletes);
  }, []);

  return athletes;
};
