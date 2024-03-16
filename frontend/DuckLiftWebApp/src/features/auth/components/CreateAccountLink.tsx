import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const CreateAccountLink: React.FC = () => {
  return (
    <Text fontSize="xs" color="gray.500" textAlign="center">
      Vous n&apos;avez pas encore de compte ?
      <ChakraLink
        color="teal.500"
        href="#"
        as={ReactRouterLink}
        to="/createAccount"
        marginLeft={1}
      >
        Créer un compte
      </ChakraLink>
    </Text>
  );
};
