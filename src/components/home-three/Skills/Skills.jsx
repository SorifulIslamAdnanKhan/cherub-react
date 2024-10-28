import { useState, useEffect } from "react";
import Container from "../../shared/Container/Container";
import bgSkills from "../../../assets/home-three/background/skills-background.png";
import Education from "../Education/Education";
import { motion } from "framer-motion";

// Skills data
const skills = [
  { id: 1, name: "UI/UX", percentage: 90 },
  { id: 2, name: "Photoshop", percentage: 70 },
  { id: 3, name: "Figma", percentage: 60 },
  { id: 4, name: "Adobe XD", percentage: 80 },
  { id: 5, name: "Illustration cc", percentage: 90 },
  { id: 6, name: "Sketch", percentage: 85 },
];

const Skills = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const progressObj = {};
      skills.forEach((skill) => {
        progressObj[skill.name] = skill.percentage;
      });
      setProgress(progressObj);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
      className="bg-[#10171E] mt-[90px] lg:mt-[120px] xl:mt-[150px] py-[40px] md:py-[80px]"
      style={{
        backgroundImage: `url(${bgSkills})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "650px",
      }}
    >
      <Container>
        <h1 className="text-white capitalize">
          My skills & <span className="font-light">Education</span>
        </h1>
        <div className="mt-[40px] md:mt-[80px]">
          {skills.map((skill, index) => (
            <div key={index} className="mb-10 flex items-center">
              {/* Skill Name */}
              <p className="text-white w-[100px] md:w-[200px]">{skill.name}</p>

              {/* Progress Bar and Percentage */}
              <div className="flex-1 ml-4">
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-700 h-0.5 rounded-lg relative">
                    <div
                      className="bg-homeThreePrimary h-0.5 rounded-lg transition-all duration-500"
                      style={{ width: `${progress[skill.name] || 0}%` }}
                    ></div>
                    <p
                      className="absolute text-white -mt-[30px]"
                      style={{
                        right: `calc(100% - ${progress[skill.name] || 0}%)`,
                        transform: `translateX(50%)`,
                      }}
                    >
                      {progress[skill.name] || 0}%{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Education Section */}
        <Education />
      </Container>
    </motion.section>
  );
};

export default Skills;
