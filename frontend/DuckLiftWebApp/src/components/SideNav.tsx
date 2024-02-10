import { Box, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const SideNav: React.FC = () => {
  return (
    <Box
      as="nav"
      aria-label="Main navigation"
      minW="240px"
      minHeight={"inherit"}
      bg="gray.200"
    >
      <VStack as="ul" p={4} alignItems={"flex-start"}>
        <ChakraLink as={ReactRouterLink} to="page-athletes">
          Athlètes
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="page-exercises">
          Exercices
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="page-planning">
          Planning
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="page-club">
          Club
        </ChakraLink>
      </VStack>
    </Box>
  );
};
