import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Kbd,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

type SearchInputProps = {
  isExpanded: boolean;
};
export const SearchInput: React.FC<SearchInputProps> = ({ isExpanded }) => {
  const textColor = useColorModeValue("gray.50", "whiteAlpha.900");
  const placeholderColor = useColorModeValue("gray.400", "whiteAlpha.800");
  const iconColor = useColorModeValue("gray.600", "whiteAlpha.900");
  const inputBackgroundColor = useColorModeValue("gray.50", "gray.700");
  return isExpanded ? (
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
  ) : (
    <HStack w={"100%"} p={2}>
      <MagnifyingGlass size={24} />
    </HStack>
  );
};
