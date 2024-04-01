import { Box, VStack, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { SideBar } from "@features/menu/components/SideBar";
import { TopBar } from "src/ui/TopBar/TopBar";

export const Home: React.FC = () => {
  return (
    <HStack className="app-container" minHeight="inherit" gap={0}>
      <SideBar />

      <VStack flex={1} spacing={0} width="full" minHeight="inherit">
        <TopBar />

        <Box as="main" width="full" display="flex" flex={1} px={4}>
          <Outlet />
        </Box>
      </VStack>
    </HStack>
  );
};
