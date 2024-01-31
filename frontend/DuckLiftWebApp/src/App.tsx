import "./App.css";
import {
  Button,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <FormControl isRequired>
        <FormLabel>Adresse Email</FormLabel>
        <Input type="email" />
        <FormHelperText>We &#39;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Mot de passe</FormLabel>
        <Input type="password" />
      </FormControl>

      <Button
        isLoading
        loadingText="Chargement"
        colorScheme="teal"
        variant="outline"
        spinnerPlacement="start"
      >
        Se Connecter
      </Button>
    </ChakraProvider>
  );
};

export default App;
