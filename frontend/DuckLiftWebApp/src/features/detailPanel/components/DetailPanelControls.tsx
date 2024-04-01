import {
  Divider,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import {
  ArrowsOutSimple,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
  DotsThree,
  LockSimple,
  LockSimpleOpen,
  Monitor,
} from "@phosphor-icons/react";
import { useState } from "react";

type DetailPanelControlsProps = { onClose: () => void };
export const DetailPanelControls: React.FC<DetailPanelControlsProps> = ({
  onClose,
}) => {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <HStack justifyContent="space-between">
      <HStack>
        <IconButton
          size="xs"
          icon={<CaretDoubleRight />}
          aria-label="Close"
          onClick={onClose}
        />
        <IconButton
          size="xs"
          icon={<ArrowsOutSimple />}
          aria-label="Open in full page"
        />
        <Menu>
          <MenuButton
            as={IconButton}
            size="xs"
            icon={<Monitor />}
            aria-label="Switch peek mode"
          />
          <MenuList>
            <MenuItem fontSize="2xs" justifyContent="space-between">
              <Text>Sur le coté</Text>
              <Checkbox isChecked colorScheme="teal" size="sm" />
            </MenuItem>
            <MenuItem fontSize="2xs">
              <Text>Centré</Text>
            </MenuItem>
            <MenuItem fontSize="2xs">
              <Text>Page entière</Text>
            </MenuItem>
            <Divider />
            <MenuItem fontSize="2xs">
              <Text>Editer vue par défault</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <HStack>
        <IconButton
          size="xs"
          icon={isLocked ? <LockSimple /> : <LockSimpleOpen />}
          aria-label={isLocked ? "Unlock details" : "Lock details"}
          onClick={toggleLock}
        />
        <IconButton size="xs" icon={<CaretLeft />} aria-label="Previous" />
        <IconButton size="xs" icon={<CaretRight />} aria-label="Next" />
        <IconButton size="xs" icon={<DotsThree />} aria-label="Edit" />
      </HStack>
    </HStack>
  );
};
