import {
  VStack,
  Grid,
  GridItem,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import { SignInHeader } from "@features/auth/components/SignInHeader";
import { SignInForm } from "@features/auth/components/SignInForm";
import { CreateAccountLink } from "@features/auth/components/CreateAccountLink";
import { AuthProviderButton } from "@features/auth/components/AuthProviderButton";
import { DividerWithText } from "@features/auth/components/DividerWithText";
import bgImageLight from "@assets/images/LIGHT.svg";
import bgImageDark from "@assets/images/DARK.svg";

export const Login: React.FC = () => {
  const bgImage = useColorModeValue(bgImageLight, bgImageDark);
  return (
    <Grid
      templateColumns={{ md: "repeat(2, 1fr)", base: "1fr" }}
      minW="100%"
      maxW="2xl"
      height="100vh"
    >
      <GridItem
        colSpan={{ md: 1, base: 0 }}
        bg="transparent"
        display={{ base: "none", md: "flex" }}
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          width="100%"
          height="700px"
          objectFit="contain"
          src={bgImage}
          alt="background image"
          loading="lazy"
        />
      </GridItem>

      <GridItem colSpan={{ md: 1, base: 1 }}>
        <VStack justifyContent="center" alignItems="center" height="100%">
          <VStack
            minHeight={"100%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            spacing={"30px"}
          >
            <SignInHeader />

            <VStack
              w="100%"
              minWidth={"300px"}
              maxWidth={"400px"}
              alignItems={"flex-start"}
            >
              <SignInForm />

              <VStack minWidth="100%">
                <DividerWithText text="ou" />

                <Stack marginTop={3} alignSelf={"center"} width="100%">
                  <AuthProviderButton />
                </Stack>

                <Stack marginTop={5}>
                  <CreateAccountLink />
                </Stack>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};
