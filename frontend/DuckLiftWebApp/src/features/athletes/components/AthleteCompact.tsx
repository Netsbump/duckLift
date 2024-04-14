import { useState } from "react";
import { Athlete } from "../types/athletesTypes";
import { Button } from "@chakra-ui/react";

type AthleteCompactProps = {
  athlete: Athlete;
  onAthleteClick: (athleteId: string) => void;
};

export const AthleteCompact: React.FC<AthleteCompactProps> = ({
  athlete,
  onAthleteClick,
}) => {
  const [athleteId, setAthleteId] = useState(athlete.id);

  const handleClickAthlete = (athleteId: string) => {
    setAthleteId(athleteId);
    onAthleteClick(athleteId);
  };

  console.log(athleteId);

  return (
    <div>
      <Button onClick={() => handleClickAthlete(athlete.id)}>Coucou</Button>
    </div>
  );
};
