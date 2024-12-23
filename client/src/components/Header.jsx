import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className=" border-b-2 border-sky-400 bg-[#0f172a] py-4">
      <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white dark:text-white"
      >
        <span className=" px-2 py-1 bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500 rounded-lg text-white">
          User's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className=" hidden md:inline"
        />
      </form>
      <Button className="w-12 h-fit md:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className=" flex gap-3 items-center md:order-2">
        <Button className="w-12 h-fit " color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" className=" rounded-lg">
            Sign-in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"}>
          <Link to="/" className=" text-lg">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to="/about" className=" text-lg">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"}>
          <Link to="/projects" className=" text-lg">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
