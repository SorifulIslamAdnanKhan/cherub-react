import { menuItems } from "../../../shared/menuItems";
import logo from "../../../../assets/home-three/logos/logo.png";
import logoDark from "../../../../assets/home-three/logos/logo-dark.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faArrowRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Button from "../../../shared/Button/Button";
import Switch from "../../../shared/Switch/Switch";
import Container from "../../../shared/Container/Container";
const Header = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track which submenu is currently open
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Function to toggle submenu open/close state based on the index
  const handleToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Function to handle submenu interaction
  const handleSubMenu = (index) => {
    setOpenSubMenu(index !== openSubMenu ? index : null);
  };

  // Get the current theme (light or dark) from next-themes
  const { theme } = useTheme();

  // State to track if the component has mounted
  const [mounted, setMounted] = useState(false);

  // Set the mounted state to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent the component from rendering until it's fully mounted
  if (!mounted) return null;

  // Define styles for the switch components based on the theme
  const switchBorderColor = "border-[#E7E7EB] dark:border-homeThreePrimary";
  const switchBgColor = "bg-homeThreePrimary";
  const moonFillColor = theme === "dark" ? "#FFFFFF" : "#10171E";
  const sunFillColor = theme === "dark" ? "#FFFFFF" : "#10171E";

  // Text and styles for the resume button
  const buttonText = "Resume";
  const buttonTextColor =
    "text-[#10171E] dark:text-[#FFFFFF] group-hover:text-[#FFFFFF]";
  const buttonBackgroundColor = "bg-transparent";
  const slidingBgColor = "bg-homeThreePrimary";
  const borderColor = "border-homeThreePrimary";
  const iconColor = "text-homeThreePrimary group-hover:text-[#FFFFFF]";
  const borderRadius = "rounded-none";

  return (
    <header className="max-h-[818px] bg-[#F7F7FE] dark:bg-[#1C2329]">
      <Container>
        {/* Main navigation menu */}
        <nav className="relative flex items-center justify-between lg:justify-between max-h-[60px] py-[60px]">
          {/* Logo Section */}
          <Link to="/">
            <img
              className="w-10/12 md:w-full h-full"
              src={theme !== "dark" ? logo : logoDark}
              alt="Cherub Logo"
            />
          </Link>
          {/* Menu items section */}
          <ul className="items-center hidden space-x-8 xl:flex">
            {menuItems?.map((item, index) =>
              item.submenu ? (
                <li
                  key={index}
                  onMouseEnter={() => handleSubMenu(index)}
                  onMouseLeave={() => handleSubMenu(null)}
                  className="group relative duration-200"
                >
                  <div className="flex gap-[10px] items-center cursor-pointer py-2">
                    <span className="cursor-pointer">{item.label}</span>
                    <FontAwesomeIcon
                      icon={openSubMenu === index ? faChevronUp : faChevronDown}
                      className={`w-[12px] h-[12px] ${
                        location.pathname !== "/"
                          ? "text-[#10171E] dark:text-[#FFFFFF]"
                          : "text-[#FFFFFF]"
                      }`}
                    />
                  </div>
                  <ul
                    className={`${
                      openSubMenu === index
                        ? "opacity-100 scale-y-100 visible"
                        : "opacity-0 scale-y-75 invisible"
                    } w-44 transition-all duration-300 ease-out transform origin-top bg-[#FFFFFF] dark:bg-[#1C2329] border dark:border-[#FFFFFF] p-1 rounded-md shadow-lg absolute top-[40px] left-1/2 -translate-x-1/2 z-20 space-y-2`}
                  >
                    {item.submenu.map((subitem, index) => (
                      <li
                        key={index}
                        className="whitespace-nowrap hover:bg-homeThreePrimary hover:text-[#10171E] py-2 px-4"
                      >
                        <NavLink
                          to={subitem.href}
                          end
                          className={({ isActive }) =>
                            isActive ? "font-extrabold" : "font-normal"
                          }
                        >
                          {subitem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index} className="relative duration-200 space-y-2">
                  <NavLink
                    to={item.href}
                    end
                    className={({ isActive }) =>
                      isActive ? "font-extrabold" : "font-normal"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="flex gap-3 justify-center items-center">
            {/* Light and dark mode switcher */}
            <Switch
              borderColor={switchBorderColor}
              bgColor={switchBgColor}
              moonFillColor={moonFillColor}
              sunFillColor={sunFillColor}
            />
            {/* Navbar CTA button */}
            <Link to="#" className="hidden xl:flex">
              <Button
                buttonText={buttonText}
                buttonTextColor={buttonTextColor}
                borderColor={borderColor}
                buttonBackgroundColor={buttonBackgroundColor}
                slidingBgColor={slidingBgColor}
                borderRadius={borderRadius}
                iconColor={iconColor}
              />
            </Link>

            {/* Mobile navbar section */}
            <div className="xl:hidden">
              {/* Dropdown open button */}
              <button
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                title={isMenuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faTimes : faBars}
                  className="text-[30px] md:text-[40px] text-homeThreePrimary"
                />
              </button>

              {/* Mobile menu with open/close animations */}
              <div
                className={`absolute top-28 left-0 w-full z-30 px-[30px] py-[20px] bg-[#10171E] rounded shadow-sm transition-all duration-500 ease-out transform ${
                  isMenuOpen ? "animate-slide-down" : "animate-slide-up"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Dropdown menu close button */}
                </div>
                {/* Mobile menu items section */}
                <nav>
                  <ul className="space-y-2">
                    {menuItems?.map((item, index) => (
                      <li key={index} className="relative duration-200">
                        {/* If item has submenu, make it collapsible */}
                        {item.submenu ? (
                          <>
                            <div
                              className="flex gap-[10px] items-center cursor-pointer text-[#FFFFFF] py-2 px-4"
                              onClick={() => handleToggle(index)}
                            >
                              <span>{item.label}</span>
                              <FontAwesomeIcon
                                icon={
                                  openSubMenu === index
                                    ? faChevronUp
                                    : faChevronDown
                                }
                                className="w-[12px] h-[12px]"
                              />
                            </div>
                            {/* Collapsible submenu */}
                            <ul
                              className={`w-44 bg-[#1C2329] transition-all duration-300 ease-in-out overflow-hidden border dark:border-[#FFFFFF] rounded-md shadow-lg ${
                                openSubMenu === index
                                  ? "max-h-[500px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              {item.submenu.map((subitem, index) => (
                                <li
                                  key={index}
                                  className="whitespace-nowrap text-[#FFFFFF] hover:bg-homeThreePrimary hover:text-[#10171E] py-2 px-4"
                                >
                                  <NavLink
                                    to={subitem.href}
                                    end
                                    className={({ isActive }) =>
                                      isActive
                                        ? "font-extrabold"
                                        : "font-normal"
                                    }
                                  >
                                    {subitem.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavLink
                            to={item.href}
                            end
                            className={({ isActive }) =>
                              isActive
                                ? "block font-extrabold py-2 px-4"
                                : "block font-normal py-2 px-4 text-[#FFFFFF]"
                            }
                          >
                            {item.label}
                          </NavLink>
                        )}
                      </li>
                    ))}
                    {/* Mobile menu CTA button */}
                    <Link to="#">
                      <button className="flex gap-[10px] justify-center items-center py-[12px] text-[17px] font-semibold ml-[15px] text-[#FFFFFF]">
                        Read More
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-[16px]"
                        />
                      </button>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
