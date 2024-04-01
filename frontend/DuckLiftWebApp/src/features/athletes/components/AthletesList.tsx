import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Box,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";

import { SortByFilter } from "@features/filters/SortByFilter";
import {
  List,
  ListDashes,
  SquaresFour,
  Funnel,
  Plus,
} from "@phosphor-icons/react";

import { useState } from "react";
import { useAthletes } from "../hooks/useAthletes";
import { AthleteCard } from "./AthleteCard";

type AthletesListProps = {
  onAthleteClick: (athleteId: string) => void;
};

export const AthletesList: React.FC<AthletesListProps> = ({
  onAthleteClick,
}) => {
  const [view, setView] = useState("grid"); // Les valeurs possibles pourraient être 'list', 'compact', 'grid'

  const athletes = useAthletes();
  const columns = useBreakpointValue({
    base: "repeat(auto-fit, minmax(250px, 1fr))",
    md: "repeat(auto-fit, minmax(250px, 1fr))",
    lg: "repeat(auto-fit, minmax(250px, 1fr))",
    xl: "repeat(auto-fit, minmax(250px, 1fr))",
  });
  const textColor = useColorModeValue("gray.500", "whiteAlpha.900");
  const placeholderColor = useColorModeValue("gray.400", "whiteAlpha.800");
  const iconColor = useColorModeValue("gray.600", "whiteAlpha.900");
  const inputBackgroundColor = useColorModeValue("gray.50", "gray.700");

  const handleViewChange = (newView: string): void => {
    setView(newView);
  };

  return (
    <Stack dir="columns" flex="1" p="4">
      <HStack pb={5} justifyContent={"space-between"}>
        <VStack alignItems="flex-start">
          <Heading as="h1" size="lg">
            Athlètes
          </Heading>
          <Text fontSize={"sm"} color={"gray.500"}>
            Tous les athlètes de votre club sont listés ici
          </Text>
        </VStack>
      </HStack>

      <HStack pb={5}>
        <HStack flex={1} justifyContent="space-between">
          <Stack w="400px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Funnel size={16} color={iconColor} />
              </InputLeftElement>
              <Input
                placeholder="Filtrer les athlètes..."
                _placeholder={{ color: placeholderColor }}
                color={textColor}
                backgroundColor={inputBackgroundColor}
                focusBorderColor="teal.500"
              />
              s
            </InputGroup>
          </Stack>

          <HStack>
            <HStack>
              <SortByFilter />
            </HStack>

            <Button size="md" fontWeight="normal" leftIcon={<Plus />}>
              Ajout Athlète
            </Button>
          </HStack>
        </HStack>
      </HStack>

      <Divider mb={5} />

      <HStack justifyContent="space-between" pb={3}>
        <Text>{athletes.length} résultats</Text>
        {/* Filtres et sélection de l'affichage */}
        <HStack justifyContent="space-between">
          <ButtonGroup isAttached variant="outline">
            <IconButton
              icon={<ListDashes />}
              aria-label="List View"
              onClick={() => handleViewChange("list")}
              isActive={view === "list"}
            />
            <IconButton
              icon={<List />}
              aria-label="Compact View"
              onClick={() => handleViewChange("compact")}
              isActive={view === "compact"}
            />
            <IconButton
              icon={<SquaresFour />}
              aria-label="Grid View"
              onClick={() => handleViewChange("grid")}
              isActive={view === "grid"}
            />
          </ButtonGroup>
        </HStack>
      </HStack>

      <Box overflowY="auto" maxH="calc(100vh - 400px)" flex={1}>
        {/* Ajustez 200px en fonction de la hauteur de votre en-tête et de tout autre contenu au-dessus de la grille */}
        <Grid templateColumns={columns} gap={6}>
          {athletes.map((athlete) => (
            <AthleteCard
              key={athlete.id}
              athlete={athlete}
              onAthleteClick={onAthleteClick}
            />
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};
