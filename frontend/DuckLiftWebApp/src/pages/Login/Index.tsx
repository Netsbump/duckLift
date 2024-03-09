import { VStack, Grid, GridItem, Stack } from "@chakra-ui/react";

import { SignInHeader } from "./components/SignInHeader";
import { SignInForm } from "./components/SignInForm";
import { CreateAccountLink } from "./components/CreateAccountLink";
import { AuthProviderButton } from "./components/AuthProviderButton";
import { DividerWithText } from "./components/DividerWithText";

export const Login: React.FC = () => {
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
