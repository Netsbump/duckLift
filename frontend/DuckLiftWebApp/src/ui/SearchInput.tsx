import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Kbd,
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

export const SearchInput: React.FC = () => {
  const textColor = useColorModeValue("gray.50", "whiteAlpha.900");
  const placeholderColor = useColorModeValue("gray.400", "whiteAlpha.800");
  const iconColor = useColorModeValue("gray.600", "whiteAlpha.900");
  const inputBackgroundColor = useColorModeValue("gray.50", "gray.700");
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color={iconColor} />
      </InputLeftElement>
      <Input
        placeholder="Rechercher..."
        _placeholder={{ color: placeholderColor }}
        color={textColor}
        backgroundColor={inputBackgroundColor}
        focusBorderColor="teal.500"
      />
      <InputRightElement width="6rem">
        <Box pr="2">
          <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};
