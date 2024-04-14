import { HStack, Select, IconButton, Text } from "@chakra-ui/react";
import {
  CaretDoubleLeft,
  CaretLeft,
  CaretRight,
  CaretDoubleRight,
} from "@phosphor-icons/react";
import { Athlete } from "../types/athletesTypes";

type PaginationBarProps = {
  selectedLines: number[];
  athletes: Athlete[];
};
export const PaginationBar: React.FC<PaginationBarProps> = ({
  selectedLines,
  athletes,
}) => {
  return (
    <HStack justifyContent="space-between" px={2} pt={2}>
      <Text fontSize={"sm"} color={"gray.500"}>
        {selectedLines.length} sur {athletes.length} selectionné(s)
      </Text>
      <HStack gap={20}>
        <HStack style={{ whiteSpace: "nowrap" }}>
          <Text fontSize={"sm"}>Ligne par page</Text>
          <Select size="sm" placeholder="10">
            <option>5</option>
            <option>10</option>
          </Select>
        </HStack>
        <HStack gap={10}>
          <Text fontSize={"sm"}>Page 1 sur 2</Text>
          <HStack>
            <IconButton
              isDisabled
              size="xs"
              icon={<CaretDoubleLeft />}
              aria-label="Reset"
            />
            <IconButton
              isDisabled
              size="xs"
              icon={<CaretLeft />}
              aria-label="Previous"
            />
            <IconButton size="xs" icon={<CaretRight />} aria-label="Next" />
            <IconButton
              size="xs"
              icon={<CaretDoubleRight />}
              aria-label="Final"
            />
          </HStack>
        </HStack>
      </HStack>
    </HStack>
  );
};
