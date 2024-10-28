import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/home-two/logos/logo.png";
import logoDark from "../../../../assets/home-two/logos/logo-dark.png";
import Container from "../../../shared/Container/Container";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Get the current theme (light or dark) from next-themes
  const { theme } = useTheme();

  // A state to track if the component is mounted
  const [mounted, setMounted] = useState(false);

  // Set the mounted state to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure the component doesn't render before it's mounted
  if (!mounted) return null;

  return (
    <footer className="mt-[150px] pb-[30px]">
      <Container>
        {/* Top section with logo and social media links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b-1 border-[#10171E] dark:border-[#FFFFFF] pb-[30px]">
          {/* Display the logo based on the current theme */}
          <img src={theme === "dark" ? logoDark : logo} alt="Logo" />

          {/* Social media links */}
          <div className="flex gap-[5px] md:gap-[20px] mt-[30px] md:mt-0">
            <Link
              to="#"
              className="border-1 border-[#E7E7EB] hover:border-homeTwoPrimary duration-500 px-[16px] md:px-[22px] py-[6px] md:py-[12px] text-[12px] md:text-[17px] font-semibold"
            >
              Facebook
            </Link>
            <Link
              to="#"
              className="border-1 border-[#E7E7EB] hover:border-homeTwoPrimary duration-500 px-[16px] md:px-[22px] py-[6px] md:py-[12px] text-[12px] md:text-[17px] font-semibold"
            >
              LinkedIn
            </Link>
            <Link
              to="#"
              className="border-1 border-[#E7E7EB] hover:border-homeTwoPrimary duration-500 px-[16px] md:px-[22px] py-[6px] md:py-[12px] text-[12px] md:text-[17px] font-semibold"
            >
              Instagram
            </Link>
          </div>
        </div>

        {/* Middle section with description and contact details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-[30px]">
          {/* Description and email address */}
          <div className="md:col-span-2">
            <p className="max-w-[400px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight mb-[30px]">
              Financial planners help people gain knowledge on how to invest and
              save their money in the most efficient way.
            </p>
            <h1 className="capitalize leading-none">debra@example.com</h1>
          </div>

          {/* Links and contact information */}
          <div className="grid grid-cols-2 mt-[30px] lg:mt-0">
            {/* Navigation links */}
            <ul className="flex flex-col text-[14px] gap-[20px] dark:font-extralight">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Our Team</Link>
              </li>
              <li>
                <Link to="#">Recent News</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
            </ul>

            {/* Contact information with icons */}
            <div className="flex flex-col gap-[20px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
              <p className="text-[14px]">123 456 789097</p>
              <p className="text-[14px]">
                {/* Email icon and address */}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-homeTwoPrimary mr-[5px]"
                />
                info@example.com
              </p>
              <p className="text-[14px]">
                {/* Location icon and address */}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-homeTwoPrimary mr-[5px]"
                />
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
