import { Text } from "@chakra-ui/react";

type NamePageDisplayedProps = {
  pageTitle: string;
};

export const NamePageDisplayed: React.FC<NamePageDisplayedProps> = ({
  pageTitle,
}) => {
  return <Text>{pageTitle}</Text>;
};
