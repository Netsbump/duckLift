import {
  VStack,
  Text,
  Stack,
  HStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { SearchInput } from "@features/menu/components/SearchInput";
import { Circle, List } from "@phosphor-icons/react";

import { UtilityNav } from "./UtilityNav";
import { MainNav } from "./MainNav";

type SideBarProps = {
  isExpanded: boolean;
  toggleNav: () => void;
};

export const SideBar: React.FC<SideBarProps> = ({ isExpanded, toggleNav }) => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.500");

  return (
    <VStack
      height="100%"
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

      <VStack justifyContent={"space-between"} flex={1}>
        <MainNav isExpanded={isExpanded} />
        <UtilityNav isExpanded={isExpanded} />
      </VStack>
    </VStack>
  );
};
