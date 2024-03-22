import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "@features/auth/hooks/useAuth";
import userDefaultImg from "@assets/images/userdefault.png";
export const ProfileAvatar: React.FC = () => {
  const { user, logout } = useAuth();
  const handleLogout = (): void => {
    logout();
  };

  const avatarColor = useColorModeValue("whiteAlpha.900", "teal.500");
  const emailColor = useColorModeValue("gray.400", "whiteAlpha.600");

  return (
    <Menu>
      <MenuButton
        as={Avatar}
        size="sm"
        name={user?.name}
        src={userDefaultImg}
        cursor="pointer"
        color={avatarColor}
      />
      <MenuList>
        <VStack alignItems={"flex-start"} p={3}>
          <Text fontSize="md">{user?.name}</Text>
          <Text fontSize={"s"} color={emailColor}>
            {user?.email}
          </Text>
        </VStack>

        <Divider />

        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>FAQ</MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
