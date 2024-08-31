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
  Badge,
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
import { AthleteList } from "./AthleteList";
// import { Athlete } from "../types/athletesTypes";
import { AthleteCompact } from "./AthleteCompact";

type AthletesPanelProps = {
  onAthleteClick: (athleteId: string) => void;
};

export const AthletesPanel: React.FC<AthletesPanelProps> = ({
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

  // const getAthleteComponent = (view: string) => {
  //   switch (view) {
  //     case "list":
  //       return AthleteList;
  //     case "compact":
  //       return AthleteCompact;
  //     case "grid":
  //     default:
  //       return AthleteCard;
  //   }
  // };

  // const AthleteComponent = getAthleteComponent(view);

  return (
    <Stack dir="columns" flex="1" p="4">
      <HStack pb={5} justifyContent={"space-between"}>
        <VStack alignItems="flex-start">
          <HStack>
            <Heading as="h1" size="lg">
              Athlètes
            </Heading>
            <Badge
              py={0.5}
              px={2}
              colorScheme="teal"
              fontSize="md"
              borderRadius="md"
              variant="outline"
            >
              {athletes.length}
            </Badge>
          </HStack>
          <Text fontSize={"sm"} color={"gray.500"}>
            Tous les athlètes de votre club sont listés ici
          </Text>
        </VStack>
      </HStack>

      <HStack>
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

            <HStack justifyContent="space-between">
              <ButtonGroup isAttached variant="outline">
                <IconButton
                  icon={<SquaresFour />}
                  aria-label="Grid View"
                  onClick={() => handleViewChange("grid")}
                  isActive={view === "grid"}
                />
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
              </ButtonGroup>
            </HStack>

            <Divider
              orientation="vertical"
              height="2rem"
              borderColor="gray.400"
              mx=".3rem"
            />
            <Button
              size="md"
              fontWeight="normal"
              fontSize="sm"
              colorScheme="teal"
              leftIcon={<Plus />}
            >
              Ajout Athlète
            </Button>
          </HStack>
        </HStack>
      </HStack>

      <Divider mb={2} />

      <Box flex={1}>
        {view === "grid" ? (
          <Grid
            templateColumns={columns}
            gap={6}
            overflowY="auto"
            maxH="calc(100vh - 370px)"
            flex={1}
          >
            {athletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                athlete={athlete}
                onAthleteClick={onAthleteClick}
              />
            ))}
          </Grid>
        ) : view === "list" ? (
          <Box flex={1}>
            <AthleteList athletes={athletes} onAthleteClick={onAthleteClick} />
          </Box>
        ) : (
          <VStack spacing={4}>
            {athletes.map((athlete) => (
              <AthleteCompact
                key={athlete.id}
                athlete={athlete}
                onAthleteClick={onAthleteClick}
              />
            ))}
          </VStack>
        )}
      </Box>
    </Stack>
  );
};
