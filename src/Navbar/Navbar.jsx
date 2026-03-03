import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import logo from '../../img/9efb01abad2ed82f1600d4fb494cd3c7ff6bc2d3.png'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [activeSection,setActiveSection]=useState("");
  const scrollToSection = (id) => {
  setActiveSection(id);
  setMenuOpen(false); // يقفل المينيو في الموبايل

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  const baselink= "px-5 py-2 rounded-full"
  const activelink="border border-[#408A5E]"
    const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    
      <nav className={`w-full z-20 top-0 start-0  fixed  transition-transform duration-500 ease-in-out -my-2  ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
         
  <div className="container flex  items-center justify-between mx-auto  ">
    <a
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src={logo}
        className="h-28 object-contain"
        alt=" Logo"
      />
    </a>

    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         <Link to="/Blog">
      <button
        type="button"
                        
        className="bg-[#265338] text-white px-10 py-4 rounded-full"  
      >
      Blog
      </button>
      </Link>

      <button
      onClick={() => setMenuOpen(!menuOpen)}
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center text-green-700 p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
    </div>

    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      {/* <ul className={`flex items-center gap-4 font-medium border border-[#DCDCDC] px-5 py-4 rounded-full  md:flex-row
    ${
      menuOpen
        ? "flex-col absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-lg rounded-2xl w-[90%]"
        : "hidden md:flex"
    }`}> */}<ul
  className={`
    font-medium border border-[#DCDCDC] rounded-full px-5 py-4 gap-4
    md:flex md:flex-row md:relative md:top-0 md:left-0 md:translate-x-0 md:bg-transparent md:shadow-none
    ${
      menuOpen ? "flex flex-col absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-lg rounded-2xl w-[90%]" : "hidden"
    }
  `}
>
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${baselink} ${
          isActive ? activelink : "text-heading"
        }`
      }
    >
      Home
    </NavLink>
         {/* <a
       onClick={() => scrollToSection("home")}
    className={`${baselink} ${
      activeSection === "home"
        ? activelink
        : "text-heading"
    }`}
    >
      Home 
    </a> */}
  </li>

  <li>
       <a
       onClick={() => scrollToSection("were")}
    className={`${baselink} ${
      activeSection === "were"
        ? activelink
        : "text-heading"
    }`}
    >
         About us
    </a>
 
  </li>

  <li>
    <a
       onClick={() => scrollToSection("cards")}
    className={`${baselink} ${
      activeSection === "cards"
        ? activelink
        : "text-heading"
    }`}
    >
      Features
    </a>
  </li>
  <li>

</li>

  <li>
      <a
       onClick={() => scrollToSection("footer")}
    className={`${baselink} ${
      activeSection === "footer"
        ? activelink
        : "text-heading"
    }`}
    >
       Contact
    </a>
  </li>
</ul>
    </div>
  </div>

</nav>
   
  )
}
