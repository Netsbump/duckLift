import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  IconButton,
  Badge,
  Avatar,
  Text,
  HStack,
  Button,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Athlete } from "../types/athletesTypes";
import { DotsThree, GenderFemale, GenderMale } from "@phosphor-icons/react";
import { useState } from "react";
import { PaginationBar } from "./PaginationBar";

type AthleteListProps = {
  athletes: Athlete[];
  onAthleteClick: (athleteId: string) => void;
};

export const AthleteList: React.FC<AthleteListProps> = ({
  athletes,
  onAthleteClick,
}) => {
  const [selectedLines, setSelectedLines] = useState<number[]>([]);
  const hoverBgColor = useColorModeValue("gray.50", "gray.600");
  const selectedBgColor = useColorModeValue("gray.200", "gray.700");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.500");

  const handleClickAthlete = (event: React.MouseEvent, athleteId: string) => {
    event.stopPropagation();
    onAthleteClick(athleteId);
  };

  const handleClickLine = (lineIndex: number) => {
    setSelectedLines((prevLines) => {
      const currentIndex = prevLines.indexOf(lineIndex);
      if (currentIndex === -1) {
        return [...prevLines, lineIndex];
      } else {
        return prevLines.filter((index) => index !== lineIndex);
      }
    });
  };

  const handleClickAllLines = () => {
    console.log("coucou");
    if (selectedLines.length === athletes.length) {
      setSelectedLines([]);
    } else {
      setSelectedLines(athletes.map((_, index) => index));
    }
  };

  const handleClickQuickActions = (
    event: React.MouseEvent,
    athleteId: string,
  ) => {
    event.stopPropagation();
    console.log(athleteId);
  };

  const getColorLevel = (
    athleteLevel: string | undefined,
  ): string | undefined => {
    switch (athleteLevel) {
      case "National":
        return "yellow";
        break;
      case "Regional":
        return "teal";
        break;
      case "Rookie":
        return "blue";
      default:
        "red";
    }
  };

  return (
    <>
      <TableContainer
        border="solid 1px"
        borderColor={borderColor}
        borderRadius="md"
        maxH="calc(100vh - 370px)"
        overflowY="auto"
      >
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={
                    selectedLines.length === athletes.length &&
                    athletes.length > 0
                  }
                  onChange={handleClickAllLines}
                />
              </Th>
              <Th>Nom</Th>
              <Th>Pays</Th>
              <Th>Catégorie</Th>
              <Th>Poids</Th>
              <Th>Arraché</Th>
              <Th>Epaulé jetté</Th>
              <Th>Année</Th>
              <Th>Niveau</Th>
              <Th w="5%">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {athletes.map((athlete, index) => (
              <Tr
                key={athlete.id}
                onClick={() => handleClickLine(index)}
                _hover={{
                  bg: selectedLines.includes(index)
                    ? selectedBgColor
                    : hoverBgColor,
                }}
                bg={
                  selectedLines.includes(index)
                    ? selectedBgColor
                    : "transparent"
                }
              >
                <Td>
                  <Checkbox isChecked={selectedLines.includes(index)} />
                </Td>
                <Td>
                  <HStack>
                    <Avatar
                      name={athlete.name}
                      src={athlete.avatar}
                      size="sm"
                    />
                    <VStack align="flex-start" spacing={0}>
                      <Text>
                        {athlete.name} {athlete.lastname}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {athlete.email}
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
                <Td>
                  <Text color={"gray.500"}>{athlete.country}</Text>
                </Td>
                <Td>
                  <HStack>
                    {athlete.sexCategorie === "male" ? (
                      <GenderMale size={24} />
                    ) : (
                      <GenderFemale size={24} />
                    )}
                    <Text> - {athlete.categorie}</Text>
                  </HStack>
                </Td>
                <Td>{athlete.bodyWeight} KG</Td>
                <Td>{athlete.maxArr} KG</Td>
                <Td>{athlete.maxEpj} KG</Td>
                <Td>{athlete.birthday.getFullYear()}</Td>
                <Td>
                  <Badge
                    px="2"
                    colorScheme={getColorLevel(athlete.level)}
                    fontSize="2xs"
                    borderRadius="md"
                  >
                    {athlete.level}
                  </Badge>
                </Td>
                <Td>
                  <HStack>
                    <Button
                      size="sm"
                      fontWeight="normal"
                      onClick={(event) => handleClickAthlete(event, athlete.id)}
                    >
                      Détail
                    </Button>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      colorScheme="gray"
                      aria-label="See menu"
                      icon={<DotsThree />}
                      onClick={(event) =>
                        handleClickQuickActions(event, athlete.id)
                      }
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <PaginationBar selectedLines={selectedLines} athletes={athletes} />
    </>
  );
};
