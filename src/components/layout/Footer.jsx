import Container from "../shared/Container/Container";
import { Link } from "react-router-dom";
import Button from "../shared/Button/Button";

const Footer = () => {
  // Variables for button customization
  const buttonText = "Get Started Now";
  const buttonTextColor = "text-[#FFFFFF] group-hover:text-[#10171E]";
  const buttonBackgroundColor = "bg-transparent";
  const slidingBgColor = "bg-homeOnePrimary";
  const borderColor = "border-[#FFFFFF] hover:border-homeOnePrimary";
  const iconColor = "text-homeOnePrimary group-hover:text-[#10171E]";
  const borderRadius = "rounded-full";

  return (
    <footer className="bg-[#10171E] pt-[80px]">
      <Container>
        {/* Footer content section */}
        <div className="flex flex-col md:flex-row justify-center">
          {/* Left section: Title and CTA button */}
          <div>
            <h1 className="text-[#FFFFFF] capitalize mb-[60px] leading-tight">
              Let's work together{" "}
              <span className="font-extralight">on your business</span> project
            </h1>

            {/* Button wrapped in a link */}
            <Link to="#">
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
          </div>

          {/* Right section: Contact information */}
          <div className="text-[#FFFFFF] mt-[20px]">
            <p className="font-bold">123 456 789097</p>
            <p className="font-bold my-[15px]">debra.holt@example.com</p>
            <p>3891 Ranchview Dr. Richardson, swei California 62639</p>
          </div>
        </div>

        {/* Horizontal line separating sections */}
        <hr className="opacity-20 mt-[50px] mb-[25px]" />

        {/* Footer bottom section with navigation links and copyright text */}
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-[10px] text-[#FFFFFF] text-[14px] capitalize pb-[20px] opacity-50">
          {/* Links section */}
          <ul className="flex gap-[20px] lg:gap-[40px] items-center">
            <li>
              <Link to="#">Terms & Condition</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
          </ul>

          {/* Copyright text */}
          <span>© Your site name 2024 | All Rights Reserved</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
