import logo from "/images/avatar2.jpg";
import { navItems } from "../data";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
const Navbar = () => {
  return (
    <header className="w-full px-2 py-2  text-slate-950 fixed top-0 left-0 ">
      <nav className=" container mx-auto  flex items-center justify-between">
        <div>
          <img
            className="w-16 h-16 rounded-full"
            src={logo}
            alt="logo image "
          />
        </div>
        <ul className="hidden md:flex gap-10 ">
          {navItems.map(({ path, link }) => {
            return (
              <Link to={path} key={link}>
                <li> {link} </li>
              </Link>
            );
          })}
        </ul>
        <div>
          <Button text={"Buy Now "} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
