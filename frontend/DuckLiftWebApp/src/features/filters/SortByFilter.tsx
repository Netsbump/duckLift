import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Tag,
  TagLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Divider,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SortAscending, TextAa } from "@phosphor-icons/react";
type FilterOption = {
  label: string;
  value: string;
  icon: React.ElementType;
};
const filterOptions: FilterOption[] = [
  { label: "Alphabétique", value: "alphabetical", icon: TextAa },
  { label: "Ajouté Récemment", value: "recents", icon: SortAscending },
  { label: "Truc", value: "truc", icon: SortAscending },
  // Ajoutez d'autres options de filtre ici
];

export const SortByFilter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const MAX_TAGS_DISPLAY = 2;

  const handleFilterClick = (option: FilterOption) => {
    setSelectedFilters((prevFilters) => {
      const filterExists = prevFilters.some(
        (filter) => filter.value === option.value,
      );
      if (filterExists) {
        return prevFilters.filter((filter) => filter.value !== option.value);
      } else {
        return [...prevFilters, option];
      }
    });
  };

  const isFilterSelected = (option: FilterOption) => {
    return selectedFilters.some((filter) => filter.value === option.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchValue(""); // If you also want to clear the search input
  };

  const filteredOptions = filterOptions.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const menuButtonBg = useColorModeValue("white", "gray.700");

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        leftIcon={<SortAscending />}
        bg={menuButtonBg}
        variant="outline"
        aria-label="Options de tri"
      >
        <HStack spacing={1} height={"inherit"}>
          <Text fontSize={"sm"} fontWeight={"normal"}>
            Trier
          </Text>

          {selectedFilters.length > 0 && ( // Afficher le Divider seulement si des filtres sont actifs
            <Divider
              orientation="vertical"
              height="1rem"
              borderColor="gray.300"
              mx=".3rem"
            />
          )}

          {selectedFilters.length > MAX_TAGS_DISPLAY ? (
            <Tag
              size="sm"
              variant="solid"
              borderRadius={"md"}
              bgColor={"gray.100"}
              color={"gray.800"}
            >
              <TagLabel>{selectedFilters.length} sélectionnés</TagLabel>
            </Tag>
          ) : (
            selectedFilters.map((filter) => (
              <Tag
                size="sm"
                key={filter.value}
                variant="solid"
                borderRadius={"md"}
                bgColor={"gray.100"}
                color={"gray.800"}
              >
                <TagLabel>{filter.label}</TagLabel>
              </Tag>
            ))
          )}
        </HStack>
      </MenuButton>
      <MenuList>
        <InputGroup variant="ghost">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Trier"
            _placeholder={{ fontSize: "sm" }}
            value={searchValue}
            onChange={handleSearchChange}
          />
        </InputGroup>

        <Divider />

        {filteredOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleFilterClick(option)}
            closeOnSelect={false}
          >
            <HStack spacing={2}>
              <Checkbox
                isChecked={isFilterSelected(option)}
                colorScheme="teal"
              />
              <Icon as={option.icon} />
              <Text fontSize={"sm"}> {option.label}</Text>
            </HStack>
          </MenuItem>
        ))}
        <Divider />
        {filteredOptions.length > 0 ? (
          selectedFilters.length > 0 && (
            <MenuItem onClick={clearFilters} justifyContent="center">
              <Text fontSize={"sm"}> Clear filters</Text>
            </MenuItem>
          )
        ) : (
          <MenuItem justifyContent="center">
            <Text fontSize={"sm"}>Aucun résultat trouvé</Text>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
