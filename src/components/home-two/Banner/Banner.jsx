import Container from "../../shared/Container/Container";
import CurveText from "../../shared/CurveText/CurveText";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from "../../../assets/home-two/images/banner/banner-image.png";
import { Link } from "react-router-dom";
const Banner = () => {
  const fillColor = "fill-[#10171E]";
  const fillDrakColor = "dark:fill-[#FFFFFF]";
  return (
    <section className="mt-[50px]">
      {/* Banner content */}
      <Container>
        <div className="flex justify-between items-center gap-[20px]">
          {/* Banner text */}
          <span className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[115px] uppercase font-extrabold z-10 leading-tight">
            Building <br /> Brand
          </span>
          {/* Banner description */}
          <p className="max-w-[150px] md:max-w-[488px] flex justify-end text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight mb-[20px]">
            business consulting is about problem-solving creacyive design
            Consultants work closely with was clients
          </p>
        </div>
        {/* Banner CTA button */}
        <div className="relative flex justify-end items-center">
          <Link
            to="#"
            className="absolute left-[10px] md:left-[7%] lg:left-[9.5%] xl:left-[13.5%] cursor-pointer"
          >
            <div className="relative flex justify-center items-center w-[150px] h-[150px] border-3 border-homeTwoPrimary rounded-full p-[50px]">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="absolute left-[58px] text-[35px] text-homeTwoPrimary rotate-[-32deg]"
              />
              <CurveText fillColor={fillColor} fillDrakColor={fillDrakColor} />
            </div>
          </Link>
          {/* Banner image */}
          <img
            src={banner}
            className="w-full md:w-[585px] lg:w-[800px] xl:w-[990px] mt-0 md:mt-[-35px] lg:mt-[-80px]"
            alt="Banner"
          />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
