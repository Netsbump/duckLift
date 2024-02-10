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
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/Authentification";

export const TopBar: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <HStack
      as="header"
      minH="60px"
      width="100%"
      justifyContent={"space-between"}
      p={4}
    >
      <Text>DuckLift App</Text>

      <Menu>
        <MenuButton as={Button} colorScheme="pink">
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
    </HStack>
  );
};
