import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Switcher from "./Switcher";
import Search from "./Search";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarContent justify="start">
        <Link href="/">
          <NavbarBrand className="mr-4">
            <span className="text-2xl">
              <AiTwotoneThunderbolt />
            </span>
            <p className="hidden sm:block font-bold text-inherit">Anjrot Dev</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="center">
        <Search />
      </NavbarContent>
      <NavbarContent justify="end">
        <Switcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
