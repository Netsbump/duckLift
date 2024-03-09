import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  FormErrorMessage,
  Heading,
  Text,
  Checkbox,
  Link as ChakraLink,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
  Grid,
  GridItem,
  Box,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { useAuth } from "@contexts/Authentification";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "@assets/images/weightlifting_logo.png";

type TFormInput = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
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
    <Grid
      minHeight={"inherit"}
      templateColumns={{ md: "repeat(2, 1fr)", base: "1fr" }}
    >
      <GridItem
        colSpan={{ md: 1, base: 0 }}
        bg="teal"
        display={{ base: "none", md: "block" }}
      />
      <GridItem colSpan={{ md: 1, base: 1 }}>
        <VStack justifyContent="center" alignItems="center" height="100%">
          <VStack
            minHeight={"100%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            spacing={"30px"}
            padding={20}
          >
            <HStack>
              <Box
                p="1"
                borderRadius="full"
                border="2px solid"
                borderColor="teal"
                display="inline-block"
              >
                <Image
                  boxSize={"24px"}
                  w="24px"
                  h="auto"
                  src={logo}
                  alt=""
                  loading="lazy"
                />
              </Box>
              <Text>DUCKLIFT</Text>
            </HStack>

            <VStack alignItems={"flex-start"}>
              <Heading as="h1" size={"lg"}>
                Connectez vous à Ducklift
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Connectez vous pour découvrir la vie de votre club.
              </Text>
            </VStack>

            <VStack
              w="100%"
              minWidth={"300px"}
              maxWidth={"400px"}
              alignItems={"flex-start"}
            >
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

              <VStack minWidth="100%">
                <HStack marginTop={3} align="center" width="100%">
                  <Divider borderColor="gray.400" />
                  <Text color="gray.500" mb={1}>
                    ou
                  </Text>
                  <Divider borderColor="gray.400" />
                </HStack>

                <Stack marginTop={3} alignSelf={"center"} width="100%">
                  <Button
                    leftIcon={<EmailIcon mt={1} />}
                    loadingText="Chargement"
                    variant="outline"
                  >
                    Se connecter avec Google
                  </Button>
                </Stack>

                <Stack marginTop={5}>
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
                </Stack>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};
