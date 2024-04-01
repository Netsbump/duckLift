import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { DetailPanelControls } from "@features/detailPanel/components/DetailPanelControls";

type AthleteDetailProps = {
  athleteId: number | null;
  onClose: () => void; // Ajoutez onClose ici
};

export const AthleteDetail: React.FC<AthleteDetailProps> = ({
  athleteId,
  onClose,
}) => {
  // Utilisez athleteId pour obtenir les détails de l'athlète depuis votre état ou contexte global
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.500");
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
        <Text>Catégorie : </Text>
        <Text>Max : </Text>
        <Text>Prochaine compétition :</Text>
        <Text>Blessures :</Text>
      </VStack>
    </Box>
  );
};
