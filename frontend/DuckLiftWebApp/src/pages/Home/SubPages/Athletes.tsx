import { Flex, useDisclosure } from "@chakra-ui/react";
import { AthleteDetail } from "@features/athletes/AthleteDetail";
import { AthletesList } from "@features/athletes/AthletesList";
import { useState } from "react";

export const Athletes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAthleteId, setSelectedAthleteId] = useState<number | null>(
    null,
  ); // Assurez-vous de définir le type Athlete correctement

  const handleAthleteClick = (athleteId: number) => {
    setSelectedAthleteId(athleteId);
    onOpen(); // Ouvrir le volet de détail
  };

  return (
    <Flex flex={1}>
      <AthletesList onAthleteClick={handleAthleteClick} />

      <Flex
        w={isOpen ? "500px" : "0"} // Utilisez une ternaire pour contrôler la largeur
        transition="width 0.3s" // Animation de la transition
        overflow="hidden" // Cache le contenu qui déborde lors de la fermeture
      >
        {selectedAthleteId && (
          <AthleteDetail athleteId={selectedAthleteId} onClose={onClose} />
        )}
      </Flex>
    </Flex>
  );
};
