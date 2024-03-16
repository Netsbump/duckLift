import { HStack, Box, Image, Heading, Text, VStack } from "@chakra-ui/react";
import logo from "@assets/images/weightlifting_logo.png";

export const SignInHeader: React.FC = () => {
  return (
    <>
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
            alt="Ducklift logo"
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
    </>
  );
};
