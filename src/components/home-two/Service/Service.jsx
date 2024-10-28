import Container from "../../shared/Container/Container";
import SectionBackground from "../../icons/SectionBackground";
import { motion } from "framer-motion";
import HomeTwoServiceTwo from "../../icons/HomeTwoServiceTwo";
import HomeTwoServiceThree from "../../icons/HomeTwoServiceThree";
import HomeTwoServiceOne from "../../icons/HomeTwoServiceOne";

// Services data
const services = [
  {
    id: 1,
    name: "Research Analysis",
    icon: HomeTwoServiceOne,
    description:
      "business consulting is about problem-solving. Consultants work closely with was clients to identify areas of",
  },
  {
    id: 2,
    name: "Strategy Planning Fox",
    icon: HomeTwoServiceTwo,
    description:
      "business consulting is about problem-solving. Consultants work closely with was clients to identify areas of",
  },
  {
    id: 3,
    name: "Compliance Consulting",
    icon: HomeTwoServiceThree,
    description:
      "business consulting is about problem-solving. Consultants work closely with was clients to identify areas of",
  },
];
const Service = () => {
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
          <p className="font-bold my-[20px] leading-none">Service</p>
          <h1 className="font-extrabold capitalize leading-none">
            Our Best Service
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-[20px] md:gap-[60px] lg:gap-[70px] mt-[50px]">
          {services.map((service, index) => (
            <div key={index}>
              <div className="group">
                <service.icon />
                <h3 className="leading-none group-hover:text-homeTwoPrimary transition-colors duration-300 ease-in-out my-[15px]">
                  {service.name}
                </h3>
              </div>
              <p className="text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Service;
