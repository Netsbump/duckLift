import {
  Box,
  Card,
  Badge,
  Button,
  Avatar,
  HStack,
  CardHeader,
  IconButton,
  Checkbox,
  VStack,
  CardFooter,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { Athlete } from "../types/athletesTypes";
import {
  DotsThreeVertical,
  GenderFemale,
  GenderMale,
} from "@phosphor-icons/react";
import { useState } from "react";

type AthleteCardProps = {
  athlete: Athlete;
  onAthleteClick: (athleteId: string) => void;
};

export const AthleteCard: React.FC<AthleteCardProps> = ({
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
    <Card
      w="2xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      variant="outline"
    >
      <CardHeader pt={1} px={2} pb={2}>
        <HStack justifyContent="space-between" pb={0}>
          <Checkbox></Checkbox>
          <IconButton
            size="sm"
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<DotsThreeVertical />}
          />
        </HStack>
        <VStack>
          <Avatar name={athlete.name} src={athlete.avatar} />
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {athlete.name} {athlete.lastname}
          </Box>
        </VStack>
      </CardHeader>

      <CardBody px="4" py="0">
        <HStack justify="center">
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {athlete.level} &bull;
          </Text>
          <Badge borderRadius="full" px="2" colorScheme="pink" fontSize="2xs">
            <Text>Cat -{athlete.categorie}</Text>
          </Badge>
          {athlete.sexCategorie === "male" ? (
            <GenderMale size={16} />
          ) : (
            <GenderFemale size={16} />
          )}
        </HStack>

        <HStack display="flex" justifyContent="space-evenly">
          <VStack spacing={0} gap={0}>
            <Text fontSize="sm">EP-J</Text>
            <Text color="blue.600" fontSize="md">
              {athlete.maxEpj}kg
            </Text>
          </VStack>
          <VStack spacing={0} gap={0}>
            <Text fontSize="sm">ARR</Text>
            <Text color="green.600" fontSize="md">
              {athlete.maxArr}kg
            </Text>
          </VStack>
          {/* <Box as="span" color="gray.600" fontSize="sm">
            ARR {athlete.maxArr}kg
          </Box>
          <Divider orientation="vertical" height="1rem" />
          <Box as="span" color="gray.600" fontSize="sm">
            EP-J {athlete.maxEpj}kg
          </Box> */}
        </HStack>
      </CardBody>

      <CardFooter p="4">
        <Button
          flex={1}
          variant="solid"
          size="sm"
          colorScheme="blue"
          onClick={() => handleClickAthlete(athlete.id)}
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};
