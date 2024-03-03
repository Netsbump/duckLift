import { VStack, HStack, Box, Image, Heading, Text } from "@chakra-ui/react";
import logo from "../../../assets/images/weightlifting_logo.png";

export const HeaderLogin: React.FC = () => {
  return (
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
            alt="Ducklift logo"
            loading="lazy"
          />
        </Box>
        <Text>DUCKLIFT</Text>
      </HStack>

      <Heading as="h1" size={"lg"}>
        Connectez vous à Ducklift
      </Heading>
      <Text fontSize="sm" color="gray.500">
        Connectez vous pour découvrir la vie de votre club.
      </Text>
    </VStack>
  );
};
