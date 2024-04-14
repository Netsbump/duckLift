import { Flex, useDisclosure } from "@chakra-ui/react";
import { AthleteDetail } from "@features/athletes/components/AthleteDetail";
import { AthletesPanel } from "@features/athletes/components/AthletesPanel";
import { useState } from "react";

export const Athletes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAthleteId, setSelectedAthleteId] = useState<string | null>(
    null,
  );

  const handleAthleteClick = (athleteId: string) => {
    setSelectedAthleteId(athleteId);
    onOpen();
  };

  return (
    <Flex flex={1} height="100%">
      <AthletesPanel onAthleteClick={handleAthleteClick} />

      <Flex
        w={isOpen ? "500px" : "0"}
        transition="width 0.3s"
        overflow="hidden"
      >
        {selectedAthleteId && (
          <AthleteDetail athleteId={selectedAthleteId} onClose={onClose} />
        )}
      </Flex>
    </Flex>
  );
};
