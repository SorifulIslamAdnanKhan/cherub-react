import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";

// Experience data
const experienceData = [
  {
    id: 1,
    company: "Webgner",
    period: "2022-2023",
    role: "Junior Designer",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit ins voluptate velit esse cillum dolore eu",
  },
  {
    id: 2,
    company: "Creative Tech",
    period: "2023-2024",
    role: "UI/UX Designer",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit ins voluptate velit esse cillum dolore eu",
  },
];

const Experience = () => {
  // Animation
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
        <h1 className="capitalize leading-none">
          My <span className="font-light">Experience</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[30px] md:mt-[60px]">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="border border-[#10171E] dark:border-[#FFFFFF] p-[30px]"
            >
              <h4 className="leading-none">{experience.company}</h4>
              <p className="opacity-90 mt-[10px] mb-[20px]">
                {experience.period}
              </p>
              <h3 className="leading-none">{experience.role}</h3>
              <p className="max-w-[550px] opacity-90 mt-[12px]">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;
