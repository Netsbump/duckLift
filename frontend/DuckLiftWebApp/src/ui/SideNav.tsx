import {
  Box,
  VStack,
  Link as ChakraLink,
  Text,
  Stack,
  HStack,
  useColorModeValue,
  Divider,
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
} from "@phosphor-icons/react";

type NavLinkProps = {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
};
// NavLink component to handle active state styling
const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const activeBg = useColorModeValue("gray.100", "gray.700");
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
      <Text ml={3}>{children}</Text>
    </ChakraLink>
  );
};

export const SecondaryNav: React.FC = () => {
  return (
    <VStack w={"100%"} px={4} py={2} justifyContent="flex-start">
      <Divider borderColor={"gray.300"} />
      <HStack w={"100%"} px={2} pt={4} pb={2}>
        <FileText size={24} />
        <Text>Documentation</Text>
      </HStack>

      <HStack w={"100%"} p={2}>
        <Question size={24} />
        <Text>Aide & Support</Text>
      </HStack>
    </VStack>
  );
};

export const SideNav: React.FC = () => {
  return (
    <VStack
      minW="276px"
      minHeight={"inherit"}
      borderRight={"solid 1px var(--chakra-colors-gray-200)"}
      spacing={0}
      alignItems="stretch"
      paddingBottom={2}
    >
      <HStack p={6} w={"100%"} minH={"73px"}>
        <Circle size={24} />
        <Text>DuckLift App</Text>
      </HStack>

      <Stack px={4} py={2}>
        <SearchInput />
      </Stack>

      <VStack justifyContent={"space-between"} flex={1}>
        <Box as="nav" aria-label="Main navigation" minW="100%">
          <VStack as="ul" px={4} py={2} alignItems="flex-start">
            <NavLink to="/" icon={House}>
              Tableau de bord
            </NavLink>
            <NavLink to="/athletes" icon={PersonSimple}>
              Athlètes
            </NavLink>
            <NavLink to="/exercises" icon={Barbell}>
              Exercices
            </NavLink>
            <NavLink to="/planning" icon={Calendar}>
              Planning
            </NavLink>
            <NavLink to="/club" icon={Newspaper}>
              Club
            </NavLink>
          </VStack>
        </Box>

        <SecondaryNav />
      </VStack>
    </VStack>
  );
};
