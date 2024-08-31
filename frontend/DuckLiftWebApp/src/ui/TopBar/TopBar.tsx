import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
//import { NamePageDisplayed } from "./NamePageDiplayed/NamePageDisplayed";
import { NotificationButton } from "@features/notifications/components/NotificationButton";
import { SwitchTheme } from "./SwitchTheme/SwitchTheme";
import { ProfileAvatar } from "./Profile/ProfileAvatar";

export const TopBar: React.FC = () => {
  const borderColor = useColorModeValue("gray.400", "whiteAlpha.500");
  const location = useLocation();

  const formatTitle = (pathname: string): string => {
    return pathname
      .replace(/\//, "") // Supprime le premier slash
      .split("-") // Sépare le string sur les tirets
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1)) // Met la première lettre en majuscule
      .join(" "); // Rassemble les parties avec un espace
  };

  let pageTitle = formatTitle(location.pathname);
  if (pageTitle === "") pageTitle = "Tableau de bord";

  return (
    <HStack
      as="header"
      // minH="60px"
      width="100%"
      justifyContent={"space-between"}
      borderBottom={"solid 1px"}
      borderColor={borderColor}
      p={4}
    >
      {/* <NamePageDisplayed pageTitle={pageTitle} /> */}
      <Breadcrumb pt="3" fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="">{pageTitle}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="">Page 2</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem> */}
      </Breadcrumb>
      <HStack spacing={2}>
        <HStack>
          <SwitchTheme />
          <NotificationButton />
        </HStack>
        <HStack>
          <ProfileAvatar />
        </HStack>
      </HStack>
    </HStack>
  );
};
