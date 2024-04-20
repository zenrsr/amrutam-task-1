import React from "react";
import {
  Navbar,
  NavbarBrand,
  // NavbarMenuToggle,
  // NavbarMenuItem,
  // NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarComp = () => {
  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out"
  // ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#FDF7E4] p-4 shadow z-10"
      isBlurred={false}
      position="sticky"
    >
      <NavbarContent className="sm:hidden cursor-pointer" justify="center">
        <GiHamburgerMenu />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 items-center" justify="center">
        <NavbarBrand>
          <p className="font-bold text-[#416343] tracking-[10px] w-auto text-xl">
            AMRUTAM
          </p>
          <Button
            as={Link}
            href="#login"
            className="ml-8 border-2 rounded-lg border-[#416343] text-[#416343] hover:bg-[#416343] hover:text-white flex flex-col items-center justify-center"
          >
            Login
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <div className="hidden sm:flex justify-between w-full">
        <NavbarBrand>
          <p className="font-bold text-[#416343] tracking-[10px] w-auto text-2xl">
            AMRUTAM
          </p>
        </NavbarBrand>
        <div className="flex items-center list-none justify-evenly">
          <NavbarItem className="mx-4">
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive className="mx-4">
            <Link
              href="/find-doctors"
              aria-current="page"
              className="text-green-900 font-semibold"
            >
              FInd Doctors
            </Link>
          </NavbarItem>
          <NavbarItem className="mx-4">
            <Link color="foreground" href="/about">
              About Us
            </Link>
          </NavbarItem>
        </div>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              href="#login"
              className="border-2 rounded-lg border-[#416343] text-[#416343] hover:bg-[#416343] hover:text-white flex flex-col items-center justify-center"
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="#login"
              className="border-2 rounded-lg bg-[#416343] text-white flex flex-col items-center justify-center"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>

      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
};

export default NavbarComp;
