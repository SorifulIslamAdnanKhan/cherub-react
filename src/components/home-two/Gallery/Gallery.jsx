import Container from "../../shared/Container/Container";
import Button from "../../shared/Button/Button";
import projectOne from "../../../assets/home-two/images/gallery/project-one.png";
import projectTwo from "../../../assets/home-two/images/gallery/project-two.png";
import projectThree from "../../../assets/home-two/images/gallery/project-three.png";
import projectFour from "../../../assets/home-two/images/gallery/project-four.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionBackground from "../../icons/SectionBackground";
import CirclePlus from "../../icons/CirclePlus";

// Projects data
const projects = [
  {
    id: 1,
    name: "Momentum Advisory",
    image: projectOne,
    icon: CirclePlus,
  },
  {
    id: 2,
    name: "Strategy Planning",
    image: projectTwo,
    icon: CirclePlus,
  },
  {
    id: 3,
    name: "Compliance Consulting",
    image: projectThree,
    icon: CirclePlus,
  },
  {
    id: 4,
    name: "Finicial Advisory",
    image: projectFour,
    icon: CirclePlus,
  },
];

const Gallery = () => {
  // Button text and styles
  const buttonText = "Read More";
  const buttonTextColor = "text-[#FFFFFF]";
  const buttonBackgroundColor = "bg-transparent";
  const slidingBgColor = "bg-homeTwoPrimary";
  const borderColor = "border-[#FFFFFF] hover:border-homeTwoPrimary";
  const iconColor = "text-[#FFFFFF]";
  const borderRadius = "rounded-none";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[15px] md:gap-y-0 md:gap-x-[30px]">
          <div className=" md:col-span-2 bg-[#1C2329] text-[#FFFFFF] p-[20px] lg:p-[40px]">
            <div className="max-w-[485px]">
              <SectionBackground />
              <p className="font-bold my-[20px] leading-none">Gallery</p>
              <h1 className="capitalize font-extrabold leading-none">
                Our Gallery
              </h1>
              <p className="mt-[20px] mb-[35px] dark:font-extralight">
                business consulting is about problem-solving. Consultants work
                closely with was clients to identify areas of{" "}
              </p>
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
          </div>
          {projects.map(
            (project) => (
              console.log(project),
              (
                <div key={project.id} className="relative group">
                  <img
                    src={project.image}
                    className="md:h-[100%] lg:h-auto object-cover"
                    alt={project.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
                    <Link to="#">
                      <div className="max-w-[90%] xl:max-w-[350px] flex justify-around items-center bg-[#FFF8F6] p-[10px]">
                        <h3 className="text-[16px] lg:text-[20px] dark:text-[#10171E] leading-none">
                          {project.name}
                        </h3>
                        <project.icon />
                      </div>
                    </Link>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </Container>
    </motion.section>
  );
};

export default Gallery;
