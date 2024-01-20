import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from "@nextui-org/react";
import { SearchIcon } from "./icons/SearchIcon";
import Switcher from "./Switcher";

const Header = () => {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Anjrot Dev</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="center">
        <Input
          classNames={{
            base: "max-w-full md:w-[400px] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <Switcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
