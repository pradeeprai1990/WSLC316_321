;
import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { countContext } from "../MainContext";

export function Header() {
  let {count,cart}=useContext(countContext)
  return (
    <Navbar fluid rounded className="shadow-lg sticky top-0 bg-white z-20">
      <Navbar.Brand  href="https://flowbite-react.com">
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar  active>
         <Link to={'/'}>  Home </Link> 
        </Navbar>
        <Navbar >
        <Link to={'/about-us'}>   About {count} </Link>
        </Navbar>
        <Navbar >
        <Link to={'/cart'}>   Cart ({cart.length}) </Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
}
