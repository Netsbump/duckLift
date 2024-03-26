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
import { useState } from "react";
import { UtilityNav } from "./UtilityNav";
import { MainNav } from "./MainNav";

export const SideBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
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

      <VStack justifyContent={"space-between"} flex={1}>
        <MainNav isExpanded={isExpanded} />
        <UtilityNav isExpanded={isExpanded} />
      </VStack>
    </VStack>
  );
};
