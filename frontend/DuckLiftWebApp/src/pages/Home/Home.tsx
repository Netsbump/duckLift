import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { SideBar } from "@features/menu/components/SideBar";
import { TopBar } from "src/ui/TopBar/TopBar";
import { useState } from "react";

export const Home: React.FC = () => {
  const SIDEBAR_EXPANDED_WIDTH = "276px";
  const SIDEBAR_COLLAPSED_WIDTH = "75px";

  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [sideBarWidth, setSideBarWidth] = useState(SIDEBAR_EXPANDED_WIDTH);

  const toggleSidebar = (): void => {
    setSidebarExpanded(!isSidebarExpanded);
    setSideBarWidth(
      isSidebarExpanded ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
    );
  };

  const gridTemplateColumns = `${sideBarWidth} 1fr`;
  const gridTemplateRows = "75px 1fr";
  const gridAreas = `
      "nav header"
      "nav main"
    `;

  return (
    <Grid
      templateAreas={gridAreas}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
      minW="100%"
      maxW="2xl"
      height="100vh"
    >
      <GridItem as="nav" area="nav">
        <SideBar isExpanded={isSidebarExpanded} toggleNav={toggleSidebar} />
      </GridItem>
      <GridItem as="header" area="header">
        <TopBar />
      </GridItem>
      <GridItem as="main" area="main" overflowY="hidden">
        <Outlet />
      </GridItem>
    </Grid>
  );
};
