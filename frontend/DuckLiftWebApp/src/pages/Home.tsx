import { Box, VStack, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { TopBar } from "../components/TopBar/TopBar";

export const Home: React.FC = () => {
  return (
    <HStack className="app-container" minHeight={"inherit"}>
      <SideNav />

      <VStack flex={1} spacing={0} width="100%" minHeight={"inherit"}>
        <TopBar />

        <Box as="main" width="100%" flex={1} p={4}>
          <Outlet />
        </Box>
      </VStack>
    </HStack>
  );
};
