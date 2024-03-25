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
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Gear, Question, SignOut, UserCircle } from "@phosphor-icons/react";
import { useAuth } from "@features/auth/hooks/useAuth";
import userDefaultImg from "@assets/images/userdefault.png";
import { AlertDialogLogOut } from "@ui/AlertDialogLogOut";
export const ProfileAvatar: React.FC = () => {
  const { user } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const avatarColor = useColorModeValue("whiteAlpha.900", "teal.500");
  const emailColor = useColorModeValue("gray.400", "whiteAlpha.600");

  return (
    <>
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

          <MenuItem>
            <HStack spacing="1" alignItems={"center"}>
              <UserCircle size={20} />
              <Text fontSize={"sm"}>Profil</Text>
            </HStack>
          </MenuItem>

          <MenuItem>
            <HStack spacing="1" alignItems={"center"}>
              <Gear size={20} />
              <Text fontSize={"sm"}>Réglages</Text>
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack spacing="1" alignItems={"center"}>
              <Question size={20} />
              <Text fontSize={"sm"}>Aide</Text>
            </HStack>
          </MenuItem>

          <Divider />

          <MenuItem onClick={onOpen}>
            <HStack spacing="1" alignItems={"center"}>
              <SignOut size={20} />
              <Text fontSize={"sm"}>Déconnexion</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>

      <AlertDialogLogOut isOpen={isOpen} onClose={onClose} />
    </>
  );
};
