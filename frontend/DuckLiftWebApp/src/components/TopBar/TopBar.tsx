import {
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/Authentification";
import { useLocation } from "react-router-dom";

export const TopBar: React.FC = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const formatTitle = (pathname: string): string => {
    return pathname
      .replace(/\//, "") // Supprime le premier slash
      .split("-") // Sépare le string sur les tirets
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1)) // Met la première lettre en majuscule
      .join(" "); // Rassemble les parties avec un espace
  };

  const pageTitle = formatTitle(location.pathname);

  const handleLogout = (): void => {
    logout();
  };

  return (
    <HStack
      as="header"
      minH="60px"
      width="100%"
      justifyContent={"space-between"}
      borderBottom={"solid 1px var(--chakra-colors-gray-200)"}
    >
      <Stack p={4}>
        <Text>{pageTitle}</Text>
      </Stack>

      <Stack p={4}>
        <Menu>
          <MenuButton as={Button} colorScheme="teal">
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>
                <Avatar size="sm" name="John Doe" />
                <span>Mon Compte</span>
              </MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Stack>
    </HStack>
  );
};
