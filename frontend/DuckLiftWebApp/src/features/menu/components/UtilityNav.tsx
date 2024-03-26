import { VStack, Divider, Button, Box, Text } from "@chakra-ui/react";
import { FileText, Question } from "@phosphor-icons/react";
import { TooltipNav } from "./ToolTipNav";
import { useCommonNavItemStyle } from "@features/menu/styles/commonNavItemStyle";

type UtilityNavProps = {
  isExpanded: boolean;
};

export const UtilityNav: React.FC<UtilityNavProps> = ({ isExpanded }) => {
  const navItemStyle = useCommonNavItemStyle();

  const handleDocumentationClick = () => {
    // Déclencher l'action pour "Documentation"
  };

  const handleSupportClick = () => {
    // Déclencher l'action pour "Aide & Support"
  };

  return (
    <VStack w={"100%"} px={4} py={2} justifyContent="flex-start">
      <Divider borderColor={"gray.300"} />
      <TooltipNav isExpanded={isExpanded} label="Documentation">
        <Box
          as={Button}
          onClick={handleDocumentationClick}
          bg="transparent"
          color="gray.600"
          sx={navItemStyle}
          leftIcon={<FileText size={24} />}
          variant="ghost"
        >
          {isExpanded && <Text ml={3}>Documentation</Text>}
        </Box>
      </TooltipNav>

      <TooltipNav isExpanded={isExpanded} label="Aide & Support">
        <Box
          as={Button}
          onClick={handleSupportClick}
          bg={"transparent"}
          color={"inherit"}
          sx={navItemStyle}
          leftIcon={<Question size={24} />}
          marginInlineEnd={0}
          variant="ghost"
        >
          {isExpanded && <Text ml={3}>Aide & Support</Text>}
        </Box>
      </TooltipNav>
    </VStack>
  );
};
