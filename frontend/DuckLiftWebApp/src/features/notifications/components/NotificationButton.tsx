import React from "react";
import { IconButton, Badge, useColorModeValue, Box } from "@chakra-ui/react";
import { Bell } from "@phosphor-icons/react";

export const NotificationButton: React.FC<{ notificationCount?: number }> = ({
  notificationCount = 0,
}) => {
  const iconColor = useColorModeValue("gray.600", "white");
  const badgeBg = useColorModeValue("red.500", "red.300");
  const badgeColor = useColorModeValue("white", "gray.800");

  return (
    <Box position="relative">
      <IconButton
        aria-label="Notifications"
        icon={<Bell size={20} />}
        variant="ghost"
        color={iconColor}
        _hover={{
          backgroundColor: useColorModeValue("gray.100", "gray.600"),
          color: useColorModeValue("gray.800", "white"),
        }}
        onClick={() => {
          // Ajoutez ici la logique pour gérer le clic du bouton
        }}
      />
      {notificationCount > 0 && (
        <Badge
          variant="solid"
          bg={badgeBg}
          color={badgeColor}
          position="absolute"
          top="-1"
          right="-2"
          fontSize="0.8em"
          p="1px 4px"
          borderRadius="full"
        >
          {notificationCount}
        </Badge>
      )}
    </Box>
  );
};
