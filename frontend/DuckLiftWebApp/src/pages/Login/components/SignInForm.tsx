import { useAuth } from "@contexts/Authentification";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Link as ChakraLink,
  Stack,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

type TFormInput = {
  email: string;
  password: string;
};

export const SignInForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    console.log(data);
    // Simulation de l'authentification
    login({ id: 1, name: "John Doe", email: data.email });
    navigate("/");
  };

  const [show, setShow] = useState(false);
  const handleClickShowPassword = (): void => setShow(!show);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} minWidth="100%">
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Adresse Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@example.co"
            focusBorderColor="teal.500"
            {...register("email", {
              required: "Ce champ est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Mot de passe</FormLabel>
          <InputGroup size="md">
            <Input
              id="password"
              type={show ? "text" : "password"}
              autoComplete="new-password"
              focusBorderColor="teal.500"
              placeholder="●●●●●●"
              {...register("password", {
                required: "Ce champ est requis",
                minLength: {
                  value: 4,
                  message:
                    "Le mot de passe doit contenir au moins 4 caractères",
                },
              })}
            />
            <InputRightElement width="3rem">
              <IconButton
                aria-label="Show hide password"
                variant={"ghost"}
                h="1.75rem"
                onClick={handleClickShowPassword}
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      <HStack marginTop={2} justifyContent={"space-between"}>
        <Checkbox colorScheme="teal">Se souvenir de moi</Checkbox>
        <ChakraLink
          color="teal.500"
          href="#"
          as={ReactRouterLink}
          to="/forgetPassword"
        >
          Mot de passe oublié ?
        </ChakraLink>
      </HStack>

      <Stack marginTop={10} alignSelf={"center"}>
        <Button
          type="submit"
          loadingText="Chargement"
          colorScheme="teal"
          variant="solid"
          spinnerPlacement="start"
          isLoading={isSubmitting}
        >
          Se connecter
        </Button>
      </Stack>
    </Box>
  );
};
