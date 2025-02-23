import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "WishList", path: "/wishlist" },
    { name: "Adopt", path: "/adopt" },
    { name: "Donate", path: "/donate" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
  
      <nav className="fixed top-0 z-10 w-full flex items-center justify-around px-6 md:px-16 bg-[#f8f6f6]">
        <NavLink to="/">
          <img src={logo} alt="Dagmaros Logo" className="w-20 h-20" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80 ${
                    isActive ? "text-[#5BCBFF] font-bold " : "text-black"
                  }`
                }
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden text-black text-xl"
        >
          {isOpen ? "\u2715" : "\u2630"} {/* ✕ = Close, ☰ = Hamburger */}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed right-0 top-[80px] flex h-screen w-2/3 flex-col items-start justify-start gap-10 bg-white shadow-md text-black p-8 md:hidden">
            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80 ${
                        isActive ? "font-bold text-primary" : ""
                      }`
                    }
                    end={item.path === "/"}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
  
  );
};
export default Header;
