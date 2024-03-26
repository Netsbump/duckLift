import { VStack, Box } from "@chakra-ui/react";
import {
  House,
  PersonSimple,
  Barbell,
  Calendar,
  Newspaper,
} from "@phosphor-icons/react";
import { NavLink } from "./NavLink";

type MainNavProp = {
  isExpanded: boolean;
};

export const MainNav: React.FC<MainNavProp> = ({ isExpanded }) => {
  return (
    <Box as="nav" aria-label="Main navigation" minW="100%">
      <VStack as="ul" px={4} py={2} alignItems="flex-start">
        <NavLink
          to="/"
          icon={House}
          isExpanded={isExpanded}
          label="Tableau de bord"
        >
          Tableau de bord
        </NavLink>
        <NavLink
          to="/athletes"
          icon={PersonSimple}
          isExpanded={isExpanded}
          label="Athlètes"
        >
          Athlètes
        </NavLink>
        <NavLink
          to="/exercises"
          icon={Barbell}
          isExpanded={isExpanded}
          label="Exercices"
        >
          Exercices
        </NavLink>
        <NavLink
          to="/planning"
          icon={Calendar}
          isExpanded={isExpanded}
          label="Planning"
        >
          Planning
        </NavLink>
        <NavLink
          to="/club"
          icon={Newspaper}
          isExpanded={isExpanded}
          label="Club"
        >
          Club
        </NavLink>
      </VStack>
    </Box>
  );
};
