import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { DetailPanelControls } from "@features/detailPanel/components/DetailPanelControls";

type AthleteDetailProps = {
  athleteId: string | null;
  onClose: () => void; // Ajoutez onClose ici
};

export const AthleteDetail: React.FC<AthleteDetailProps> = ({
  athleteId,
  onClose,
}) => {
  const borderColor = useColorModeValue("gray.500", "whiteAlpha.500");
  return (
    <Box
      pl="4"
      py="4"
      w="100%"
      borderLeft="solid 1px"
      borderColor={borderColor}
    >
      <DetailPanelControls onClose={onClose} />

      <VStack alignItems="flex-start" spacing={2} pt={10}>
        <Text fontSize="xl">Sten Levasseur</Text>
        <Text>{athleteId}</Text>
        <Text>Age : </Text>
        <Text>Catégorie : -102kg</Text>
        <Text>Date ajout</Text>
        <Text>Max : Tableau avec tous les maxs sur plein exo</Text>
        <Text>Prochaine compétition :</Text>
        <Text>Blessures :</Text>
        <Text>Poids de corps :</Text>
        <Text>Série : Débutant / Région ect...</Text>
        <Text>Blessures :</Text>
      </VStack>
    </Box>
  );
};
