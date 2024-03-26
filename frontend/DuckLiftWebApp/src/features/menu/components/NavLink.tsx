import { Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { TooltipNav } from "./ToolTipNav";
import { useCommonNavItemStyle } from "@features/menu/styles/commonNavItemStyle";
type NavLinkProps = {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isExpanded: boolean;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  icon: Icon,
  children,
  isExpanded,
  label,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const activeBg = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("teal.600", "teal.200");
  const navItemStyle = useCommonNavItemStyle();

  return (
    <TooltipNav isExpanded={isExpanded} label={label}>
      <ChakraLink
        as={ReactRouterLink}
        to={to}
        bg={isActive ? activeBg : "transparent"}
        color={isActive ? activeColor : "inherit"}
        sx={navItemStyle}
      >
        <Icon size={24} />
        {isExpanded && <Text ml={3}>{children}</Text>}
      </ChakraLink>
    </TooltipNav>
  );
};
