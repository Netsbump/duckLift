import {
  Box,
  VStack,
  Link as ChakraLink,
  Text,
  Stack,
  HStack,
  useColorModeValue,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { SearchInput } from "src/ui/SearchInput";
import {
  Barbell,
  Calendar,
  Circle,
  FileText,
  House,
  Newspaper,
  PersonSimple,
  Question,
  List,
} from "@phosphor-icons/react";
import { useState } from "react";

type NavLinkProps = {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isExpanded: boolean;
};
// NavLink component to handle active state styling
const NavLink: React.FC<NavLinkProps> = ({
  to,
  icon: Icon,
  children,
  isExpanded,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const activeBg = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("teal.600", "teal.200");

  return (
    <ChakraLink
      as={ReactRouterLink}
      to={to}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      bg={isActive ? activeBg : "transparent"}
      color={isActive ? activeColor : "inherit"}
      _hover={{
        textDecoration: "none",
        bg: activeBg,
      }}
      padding={2}
      borderRadius="md"
      w={"100%"}
      transition="all 0.3s"
    >
      <Icon size={24} />
      {isExpanded && <Text ml={3}>{children}</Text>}
    </ChakraLink>
  );
};

type SecondaryNavProps = {
  isExpanded: boolean;
};
export const SecondaryNav: React.FC<SecondaryNavProps> = ({ isExpanded }) => {
  return (
    <VStack w={"100%"} px={4} py={2} justifyContent="flex-start">
      <Divider borderColor={"gray.300"} />
      <HStack w={"100%"} px={2} pt={4} pb={2}>
        <FileText size={24} />
        {isExpanded && <Text>Documentation</Text>}
      </HStack>

      <HStack w={"100%"} p={2}>
        <Question size={24} />
        {isExpanded && <Text>Aide & Support</Text>}
      </HStack>
    </VStack>
  );
};

export const SideNav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  //const [isHover, setIsHover] = useState(false);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.500");

  const toggleNav = (): void => setIsExpanded(!isExpanded);

  return (
    <VStack
      width={isExpanded ? "276px" : "75px"}
      minHeight="inherit"
      borderRight="solid 1px"
      borderColor={borderColor}
      spacing={0}
      alignItems="stretch"
      paddingBottom={2}
    >
      <HStack p={4} w={"100%"} minH={"73px"}>
        <IconButton
          aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
          icon={isExpanded ? <Circle size={24} /> : <List size={24} />}
          onClick={toggleNav}
          variant="ghost"
        />
        {isExpanded && <Text>DuckLift App</Text>}
      </HStack>

      <Stack px={4} py={2}>
        <SearchInput isExpanded={isExpanded} />
      </Stack>

      <VStack
        justifyContent={"space-between"}
        flex={1}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <Box as="nav" aria-label="Main navigation" minW="100%">
          <VStack as="ul" px={4} py={2} alignItems="flex-start">
            <NavLink to="/" icon={House} isExpanded={isExpanded}>
              Tableau de bord
            </NavLink>
            <NavLink to="/athletes" icon={PersonSimple} isExpanded={isExpanded}>
              Athlètes
            </NavLink>
            <NavLink to="/exercises" icon={Barbell} isExpanded={isExpanded}>
              Exercices
            </NavLink>
            <NavLink to="/planning" icon={Calendar} isExpanded={isExpanded}>
              Planning
            </NavLink>
            <NavLink to="/club" icon={Newspaper} isExpanded={isExpanded}>
              Club
            </NavLink>
          </VStack>
        </Box>

        <SecondaryNav isExpanded={isExpanded} />
      </VStack>
    </VStack>
  );
};
