import Container from "../../shared/Container/Container";
import aboutImage from "../../../assets/home-three/images/about/about.png";
import Button from "../../shared/Button/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  // Button text and styles
  const buttonText = "Hire Me";
  const buttonTextColor =
    "text-[#10171E] dark:text-[#FFFFFF] group-hover:text-[#FFFFFF]";
  const borderColor = "border-homeThreePrimary";
  const borderRadius = "none";
  const buttonBackgroundColor = "bg-transparent";
  const slidingBgColor = "bg-homeThreePrimary";
  const iconColor = "text-homeThreePrimary group-hover:text-[#FFFFFF]";

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
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px]"
    >
      <Container>
        {/* Main text section */}
        <div className="relative z-10">
          <p className="text-[50px] md:text-[60px] lg:text-[80px] xl:text-[120px] capitalize leading-none">
            Partner in Portfolio{" "}
            <span className="font-extrabold">Progress</span>{" "}
          </p>
        </div>

        {/* Image and text container with negative margin adjustments */}
        <div className="-mt-[18px] md:-mt-[22px] lg:-mt-[28px] xl:-mt-[40px] flex flex-col md:flex-row justify-center xl:items-center md:gap-[50px] xl:gap-[60px]">
          {/* About image */}
          <img
            src={aboutImage}
            className="w-[90%] object-cover md:w-[34%] lg:w-[37%] xl:w-[40%] ml-[33px] md:ml-[40px] lg:ml-0"
            alt="About Image"
          />

          {/* Text content */}
          <div className="mt-[30px] md:mt-0">
            <h4 className="leading-none">About Me</h4>

            {/* Description text */}
            <div className="md:max-w-[450px] xl:max-w-[520px] text-[#7F6666] mt-[20px] mb-[20px] dark:text-[#FFFFFF] dark:font-extralight">
              <p>
                Personal portfolio showcases an individual's professional
                accomplishments, skills, and experiences. It typically includes
                samples of their work, such as projects, designs, writing
                samples, or code snippets, along with a resume or CV.
              </p>
              <p className="mt-[20px]">
                Organization this could desi rangentify areas of improvement
                within the designer organization. This could desi range.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-[40px]">
              <Link to="#">
                {/* Custom Button component with dynamic props */}
                <Button
                  buttonText={buttonText}
                  buttonTextColor={buttonTextColor}
                  borderColor={borderColor}
                  buttonBackgroundColor={buttonBackgroundColor}
                  borderRadius={borderRadius}
                  slidingBgColor={slidingBgColor}
                  iconColor={iconColor}
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default About;
