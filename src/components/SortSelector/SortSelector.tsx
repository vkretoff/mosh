import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Релевантность</MenuItem>
        <MenuItem>Дата добавления</MenuItem>
        <MenuItem>Название</MenuItem>
        <MenuItem>Дата выхода</MenuItem>
        <MenuItem>Популярность</MenuItem>
        <MenuItem>Средний рейтинг</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
