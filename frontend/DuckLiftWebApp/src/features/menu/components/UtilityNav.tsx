import {
  VStack,
  Divider,
  Button,
  Box,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Question } from "@phosphor-icons/react";
import { TooltipNav } from "./ToolTipNav";
import { useCommonNavItemStyle } from "@features/menu/styles/commonNavItemStyle";
import { DrawerNav } from "./DrawerNav";

type UtilityNavProps = {
  isExpanded: boolean;
};

export const UtilityNav: React.FC<UtilityNavProps> = ({ isExpanded }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navItemStyle = useCommonNavItemStyle();
  const dividerColor = useColorModeValue("gray.400", "whiteAlpha.300");

  const handleSupportClick = (): void => {
    onOpen();
  };

  return (
    <VStack w={"100%"} px={4} py={2} justifyContent="flex-start">
      <Divider borderColor={dividerColor} />

      <TooltipNav isExpanded={isExpanded} label="Aide & Support">
        <Box
          as={Button}
          onClick={handleSupportClick}
          bg="transparent"
          color="inherit"
          sx={navItemStyle}
          leftIcon={<Question size={24} />}
          variant="ghost"
          fontWeight="normal"
        >
          {isExpanded && <Text ml={1}>Aide & Support</Text>}
        </Box>
      </TooltipNav>
      <DrawerNav isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
};
