import Container from "../../shared/Container/Container";
import bgCTAOne from "../../../assets/home-two/background/bg-CTA-one.png";
import bgCTATwo from "../../../assets/home-two/background/bg-CTA-two.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
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
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px] bg-[#1C2329] relative overflow-hidden"
    >
      <img
        src={bgCTAOne}
        className="absolute top-0 right-0 w-[110px] md:w-[280px]"
        alt=""
      />
      <img
        src={bgCTATwo}
        className="absolute bottom-0 left-0 w-[110px] md:w-[280px]"
        alt=""
      />
      <Container>
        <div className="flex flex-col justify-center items-center gap-[50px] py-[50px]">
          <h1 className="capitalize text-center text-[#FFFFFF] leading-tight px-[10px] md:px-[50px]">
            Business consulting is a{" "}
            <span className="text-homeTwoPrimary">dynamic field dedicated</span>{" "}
            to helping organizations improve their performance,{" "}
            <span className="text-homeTwoPrimary">efficiency</span>, and
            profitability
          </h1>
          {/* CTA button */}
          <Link to="#" className="pb-[15px]">
            <button className="relative overflow-hidden group transition-all duration-500 ease-in-out flex items-center text-[#FFFFFF] px-[22px] py-[12px] text-[17px] border-1 border-homeTwoPrimary rounded-full">
              <span className="w-[101%] absolute inset-0 transition-transform duration-500 transform translate-x-full group-hover:translate-x-0 ease-out bg-homeTwoPrimary"></span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white mr-2">
                Contact Us
              </span>
            </button>
          </Link>
        </div>
      </Container>
    </motion.section>
  );
};

export default CallToAction;
