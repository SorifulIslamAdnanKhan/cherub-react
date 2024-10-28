import Container from "../../shared/Container/Container";
import aboutImage from "../../../assets/home-two/images/about/about-image.png";
import CurveText from "../../shared/CurveText/CurveText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionBackground from "../../icons/SectionBackground";

const About = () => {
  const fillColor = "fill-[#10171E]";
  const fillDrakColor = "dark:fill-[#FFFFFF]";

  // Animations
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

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px]"
    >
      <Container>
        <div>
          <SectionBackground />
          <p className="font-bold my-[20px] leading-none">About</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-[20px]">
          <h1 className="capitalize font-extrabold leading-tight">
            Transforming <br /> Challenges into <br />
            <span className="text-homeTwoPrimary">Opportunities</span>
          </h1>
          <div className="max-w-[500px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
            <p>
              business consulting is about problem-solving. Consultants work
              closely with was clients to identify areas of improvement within
              thei designerr organization This could desi range
            </p>
            <p className="mt-[20px] md:mt-[35px]">
              Communication skills are essential for success in desig business
              consulting. Consultants must effectively des communicate their
              findings and recommendations to clients des at all levels of the
              organization, from frontline employees to senior executives This
              requires the ability to distill complex information into clear and
              actionable insights
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-end items-center gap-[40px] md:gap-[80px] mt-[40px] md:mt-[80px]">
          {/* About CTA button */}
          <Link to="#" className="cursor-pointer">
            <div className="relative flex justify-center items-center w-[150px] h-[150px] border-3 border-homeTwoPrimary rounded-full p-[50px]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[58px]"
              >
                <path
                  d="M9.5848 0.231604L9.5848 5.4385L30.4124 5.4385L0.286773 35.5641L4.00598 39.2833L34.1316 9.15771V29.9853H39.3385V0.231604H9.5848Z"
                  fill="#FB6B49"
                />
              </svg>
              <CurveText fillColor={fillColor} fillDrakColor={fillDrakColor} />
            </div>
          </Link>
          <img src={aboutImage} className="md:w-[50%]" alt="About Image" />
        </div>
      </Container>
    </motion.section>
  );
};

export default About;
