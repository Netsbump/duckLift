import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
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
export const Athletes: React.FC = () => {
  const [view, setView] = useState("grid"); // Les valeurs possibles pourraient être 'list', 'compact', 'grid'
  const textColor = useColorModeValue("gray.500", "whiteAlpha.900");
  const placeholderColor = useColorModeValue("gray.400", "whiteAlpha.800");
  const iconColor = useColorModeValue("gray.600", "whiteAlpha.900");
  const inputBackgroundColor = useColorModeValue("gray.50", "gray.700");

  const handleViewChange = (newView: string): void => {
    setView(newView);
  };

  return (
    <>
      <HStack pb={5} justifyContent={"space-between"}>
        <Text fontSize={"sm"} color={"gray.500"}>
          Tous les athlètes de votre club sont listés ici
        </Text>
        <Button size="sm" fontWeight="normal" leftIcon={<Plus />}>
          Ajout Athlète
        </Button>
      </HStack>
      <Divider mb={5} />
      <HStack pb={5}>
        <HStack flex={1}>
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
            <SortByFilter />
          </HStack>
        </HStack>

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
      <Card maxW="sm" variant="outline">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Sten Levasseur</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
