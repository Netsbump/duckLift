import { HStack, Divider, Text } from "@chakra-ui/react";

type DividerWithTextProps = {
  text: string;
};

export const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => (
  <HStack marginTop={3} align="center" width="100%">
    <Divider borderColor="gray.400" />
    <Text color="gray.500" mb={1}>
      {text}
    </Text>
    <Divider borderColor="gray.400" />
  </HStack>
);
