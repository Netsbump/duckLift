import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/Authentification";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulation de l'authentification
    login({ id: 1, name: "John Doe", email: email });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Ajouter le gestionnaire de soumission ici */}
      <HStack
        justifyContent={"space-around"}
        minHeight={"inherit"}
        alignItems={"center"}
      >
        <VStack>
          <FormControl isRequired>
            <FormLabel>Adresse Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            type="submit"
            loadingText="Chargement"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          >
            Se Connecter
          </Button>
        </VStack>
        <Box>Image</Box>
      </HStack>
    </form>
  );
};
