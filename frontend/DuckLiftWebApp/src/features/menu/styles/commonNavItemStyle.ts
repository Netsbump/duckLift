import { useColorModeValue, SystemStyleObject } from "@chakra-ui/react";

export const useCommonNavItemStyle = (): SystemStyleObject => {
  const activeBg = useColorModeValue("gray.400", "gray.700");

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    _hover: {
      textDecoration: "none",
      bg: activeBg,
    },
    padding: 2,
    borderRadius: "md",
    w: "100%",
    transition: "all 0.3s",
  };
};
