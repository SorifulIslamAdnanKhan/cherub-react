import {
  faArrowRight,
  faBars,
  faChevronDown,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoDark from "../../../assets/home-one/logos/logo-dark.png";
import logo from "../../../assets/home-one/logos/logo.png";
import Button from "../../shared/Button/Button";
import Container from "../../shared/Container/Container";
import { menuItems } from "../../shared/menuItems";
import Switch from "../../shared/Switch/Switch";

const Header = () => {
  // Get the current location (pathname) to dynamically adjust styles based on the active route
  let location = useLocation();

  // State to track whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track which submenu is open
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Toggle function to open or close a submenu
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

  // Prevent rendering until the component has mounted
  if (!mounted) return null;

  // Dynamic styles for the switch border color based on the current route
  const switchBorderColor =
    location.pathname !== "/" ? "border-[#E7E7EB]" : "border-[#FFFFFF]";

  // Dynamic styles for the switch background color based on the current route
  const switchBgColor =
    location.pathname !== "/"
      ? "bg-[#10171E] dark:bg-homeOnePrimary"
      : "bg-homeOnePrimary";

  // Define moon and sun icon fill color depending on the route and theme
  const moonFillColor =
    location.pathname !== "/" && theme !== "dark" ? "#10171E" : "#FFFFFF";
  const sunFillColor =
    location.pathname !== "/" && theme !== "dark" ? "#FFFFFF" : "#10171E";

  // Text and styles for the read more button
  const buttonText = "Read More";

  // Dynamic button text color based on the route and theme
  const buttonTextColor =
    location.pathname !== "/" && theme !== "dark"
      ? "text-[#10171E]"
      : "text-[#FFFFFF] group-hover:text-[#10171E]";
  const buttonBackgroundColor = "bg-transparent";
  const slidingBgColor = "bg-homeOnePrimary";

  // Dynamic border color for the button, changing based on the route and theme
  const borderColor =
    location.pathname !== "/" && theme !== "dark"
      ? "border-[#10171E] hover:border-homeOnePrimary"
      : "border-[#FFFFFF] hover:border-homeOnePrimary";

  // Dynamic icon color within the button, based on the route and theme
  const iconColor =
    location.pathname !== "/" && theme !== "dark"
      ? "text-[#10171E]"
      : "text-homeOnePrimary group-hover:text-[#10171E]";
  const borderRadius = "rounded-full";

  return (
    <header
      className={`max-h-[818px]  ${
        location.pathname !== "/"
          ? "bg-[#FFFFFF] dark:bg-transparent"
          : "bg-[#10171E]"
      }`}
    >
      <Container>
        {/* Main Navigation Menu */}
        <nav className="relative flex items-center justify-between lg:justify-between max-h-[60px] py-[60px] border-b-1 border-[#E7E7EB]">
          {/* Logo Section */}
          <Link to="/">
            <img
              className="w-10/12 md:w-full h-full"
              src={
                location.pathname !== "/" && theme !== "dark" ? logo : logoDark
              }
              alt="Cherub Logo"
            />
          </Link>
          {/* Menu Items Section */}
          <ul className="items-center hidden space-x-8 xl:flex">
            {menuItems?.map((item, index) =>
              item.submenu ? (
                <li
                  key={index}
                  onMouseEnter={() => handleSubMenu(index)}
                  onMouseLeave={() => handleSubMenu(null)}
                  className="group relative duration-200"
                >
                  <div className="flex gap-[10px] items-center cursor-pointer text-[#FFFFFF] py-2">
                    <span
                      className={`cursor-pointer ${
                        location.pathname !== "/"
                          ? "text-[#10171E] dark:text-[#FFFFFF]"
                          : "text-[#FFFFFF]"
                      }`}
                    >
                      {item.label}
                    </span>
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
                        className="whitespace-nowrap hover:bg-homeOnePrimary hover:text-[#10171E] py-2 px-4"
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
                <li
                  key={index}
                  className={`relative duration-200 space-y-2 ${
                    location.pathname !== "/"
                      ? "text-[#10171E] dark:text-[#FFFFFF]"
                      : "text-[#FFFFFF]"
                  }`}
                >
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
            {/* Light and Dark Mode Switcher */}
            <Switch
              borderColor={switchBorderColor}
              bgColor={switchBgColor}
              moonFillColor={moonFillColor}
              sunFillColor={sunFillColor}
            />
            {/* Navbar CTA Button */}
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

            {/* Mobile Navbar Section */}
            <div className="xl:hidden">
              {/* Dropdown Open Button */}
              <button
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                title={isMenuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faTimes : faBars}
                  className={`text-[30px] md:text-[40px] ${
                    location.pathname !== "/" && theme !== "dark"
                      ? "text-[#10171E] dark:text-homeOnePrimary"
                      : "text-homeOnePrimary"
                  }`}
                />
              </button>

              {/* Mobile Menu with Open/Close Animations */}
              <div
                className={`absolute top-28 left-0 w-full z-30 px-[30px] py-[20px] bg-[#10171E] rounded shadow-sm transition-all duration-500 ease-out transform ${
                  isMenuOpen ? "animate-slide-down" : "animate-slide-up"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Dropdown Menu Close Button */}
                </div>
                {/* Mobile Menu Items Section */}
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
                            {/* Collapsible Submenu */}
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
                                  className="whitespace-nowrap text-[#FFFFFF] hover:bg-homeOnePrimary hover:text-[#10171E] py-2 px-4"
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
                                ? "block font-extrabold py-2 px-4 text-[#FFFFFF]"
                                : "block font-normal py-2 px-4 text-[#FFFFFF]"
                            }
                          >
                            {item.label}
                          </NavLink>
                        )}
                      </li>
                    ))}
                    {/* Mobile Menu CTA Button */}
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