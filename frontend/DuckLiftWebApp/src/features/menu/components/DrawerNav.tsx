import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Divider,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FileText,
  Key,
  PaperPlaneTilt,
  WarningCircle,
} from "@phosphor-icons/react";

type DrawerNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DrawerNav: React.FC<DrawerNavProps> = ({ isOpen, onClose }) => {
  const dividerColor = useColorModeValue("gray.400", "whiteAlpha.300");

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize="md">Aide & support</DrawerHeader>
        <Divider borderColor={dividerColor} />
        <DrawerBody>
          <VStack width="100%" justifyContent="flex-start" mt={2}>
            <Button
              w="inherit"
              color="inherit"
              leftIcon={<Key size={20} />}
              variant="outline"
              fontWeight="normal"
              justifyContent="flex-start"
            >
              <Text ml={1} fontSize="sm" fontWeight="semibold">
                Raccourcis
              </Text>
            </Button>
            <Button
              w="inherit"
              color="inherit"
              leftIcon={<FileText size={20} />}
              variant="outline"
              fontWeight="normal"
              justifyContent="flex-start"
            >
              <Text ml={1} fontSize="sm" fontWeight="semibold">
                Documentation
              </Text>
            </Button>
            <Button
              w="inherit"
              color="inherit"
              leftIcon={<WarningCircle size={20} />}
              variant="outline"
              fontWeight="normal"
              justifyContent="flex-start"
            >
              <Text ml={1} fontSize="sm" fontWeight="semibold">
                Signaler un bug
              </Text>
            </Button>
            <Button
              w="inherit"
              color="inherit"
              leftIcon={<PaperPlaneTilt size={20} />}
              variant="outline"
              fontWeight="normal"
              justifyContent="flex-start"
            >
              <Text ml={1} fontSize="sm" fontWeight="semibold">
                Contact
              </Text>
            </Button>
          </VStack>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
