import Container from "../../../shared/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faPinterest,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import footerLogo from "../../../../assets/home-three/logos/footer-logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1C2329] mt-[150px] pt-[80px] pb-[50px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-[50px] lg:gap-0">
          {/* Subscription section */}
          <div>
            <h2 className="text-[#FFFFFF] capitalize leading-none">
              Subcribe Newsletter
            </h2>
            <div className="flex border border-[#E7EDF4] mt-[50px] py-[5px]">
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full px-[20px] py-[10px] outline-0 border-0 bg-[#1C2329]"
              />
              <button className="bg-homeThreePrimary text-[17px] text-white px-[20px] py-[10px] mr-[5px]">
                Subscribe
              </button>
            </div>
          </div>
          {/* Social media section */}
          <div>
            <p className="max-w-[300px] text-[#FFFFFF] opacity-70">
              Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply
            </p>
            <div className="flex gap-[20px] mt-[20px] text-[20px] text-homeThreePrimary">
              <Link to="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faPinterest} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
          {/* Navigation links */}
          <div>
            <ul className="space-y-3 text-[#FFFFFF] text-[12px] lg:text-[16px] opacity-70">
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
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative">
          <div className="w-full absolute top-[76px] md:top-[130px] lg:top-[180px] xl:top-[185px] flex flex-col-reverse md:flex-row items-center justify-between border-t pt-[15px] md:pt-[25px] lg:pt-[40px] opacity-50">
            <p className="text-[#FFFFFF]">
              © Your sitename 2024 | All Rights Reserved
            </p>
            <ul className="flex space-x-4 text-[12px] lg:text-[16px] text-[#FFFFFF] mb-[5px] md:mb-0">
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Footer logo */}
          <div className="flex justify-center mt-[120px]">
            <img src={footerLogo} alt="Footer Logo" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
