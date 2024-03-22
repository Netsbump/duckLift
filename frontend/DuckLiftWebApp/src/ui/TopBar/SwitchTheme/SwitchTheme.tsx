import {
  useColorMode,
  Switch,
  FormControl,
  FormLabel,
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Sun, Moon } from "@phosphor-icons/react";

export const SwitchTheme: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <Flex align="center">
        <HStack>
          <Box>
            {colorMode === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </Box>

          <FormLabel htmlFor="theme-switch" mb="0" mr={2}>
            {colorMode === "light" ? "Light" : "Dark"}
          </FormLabel>
        </HStack>
        <Switch
          id="theme-switch"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="teal" // Vous pouvez personnaliser la couleur du switch ici
        />
      </Flex>
    </FormControl>
  );
};
