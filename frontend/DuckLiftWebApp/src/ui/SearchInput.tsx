import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Kbd,
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchInput: React.FC = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input placeholder="Rechercher..." />
      <InputRightElement width="6rem">
        <Box pr="2">
          <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};
