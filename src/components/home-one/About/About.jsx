import { Link } from "react-router-dom";
import aboutImageOne from "../../../assets/home-one/images/about/about-image-one.png";
import aboutImageTwo from "../../../assets/home-one/images/about/about-image-two.png";
import Container from "../../shared/Container/Container";
import CurveText from "../../shared/CurveText/CurveText";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  //Animations
  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  const fillColor = "fill-[#FFFFFF]";
  const fillDrakColor = "dark:fill-[#FFFFFF]";

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-[#10171E] py-[80px] lg:py-[110px]"
    >
      <Container>
        {/* Section text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="text-[#FFFFFF] font-bold leading-none">About Us</p>
          <div className="flex-grow">
            <hr className="border-[#FFFFFF]" />
          </div>
        </div>
        <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[110px]">
          {/* About first image */}
          <div>
            <img src={aboutImageOne} className="w-full" alt="About Image One" />
          </div>
          <div>
            {/* About headeing */}
            <h1 className="text-[#FFFFFF] leading-none">
              Custom Solutions{" "}
              <span className="font-extralight">For Unique</span> Challenges
            </h1>
            {/* About text */}
            <p className="max-w-[560px] font-extralight text-[#FFFFFF] mt-[40px] ">
              business consulting is about problem-solving. Consultants work
              closely with was clients to identify areas of improvement within
              thei designerr organization This could desi range from
              streamlining{" "}
            </p>
            <div className="relative flex justify-center xl:justify-end items-center mt-[30px] lg:mt-[100px]">
              {/* About CTA button */}
              <Link
                href="#"
                className="absolute md:right-[62.5%] lg:right-[69%] xl:right-[43%] cursor-pointer"
              >
                <div className="relative flex justify-center items-center w-[150px] h-[150px] border border-homeOnePrimary rounded-full p-[50px]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute left-[58px] text-[35px] text-homeOnePrimary rotate-[-32deg]"
                  />
                  <CurveText
                    fillColor={fillColor}
                    fillDrakColor={fillDrakColor}
                  />
                </div>
              </Link>
              {/* About second image */}
              <img
                src={aboutImageTwo}
                className="w-full md:max-w-fit"
                alt="About Image Two"
              />
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default About;
