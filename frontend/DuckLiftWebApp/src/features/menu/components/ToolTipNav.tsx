import { Tooltip } from "@chakra-ui/react";

type TooltipNavProps = {
  children: React.ReactNode;
  label: string;
  isExpanded: boolean;
};

export const TooltipNav: React.FC<TooltipNavProps> = ({
  children,
  label,
  isExpanded,
}) => {
  return (
    <Tooltip
      label={label}
      placement="right"
      isDisabled={isExpanded}
      borderRadius="sm"
    >
      {children}
    </Tooltip>
  );
};
