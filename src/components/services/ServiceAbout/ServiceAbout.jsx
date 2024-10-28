import serviceAbout from "../../../assets/home-one/images/service/service-about.png";
import Container from "../../shared/Container/Container";
import Button from "../../shared/Button/Button";
import { motion } from "framer-motion";

const ServiceAbout = () => {
  // Button details and styles
  const buttonText = "Read More";
  const buttonTextColor = "text-[#FFFFFF]";
  const buttonBackgroundColor = "bg-[#10171E]";
  const borderColor = "border-transparent";
  const iconColor = "text-homeOnePrimary";
  const borderRadius = "rounded-full";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[20px] md:gap-[43px]">
          <div>
            <img
              className="w-full mx-auto"
              src={serviceAbout}
              alt="service About"
            />
          </div>
          <div className="space-y-[20px] md:space-y-[43px]">
            {/* About headeing */}
            <h1 className="leading-none">
              <span className="font-bold">Strategies For Success</span>
              <br />
              <span className="font-normal">Business Solutions</span>
            </h1>
            {/* About text */}
            <p className="max-w-[560px]">
              business consulting is about problem-solving. Consultants work
              closely with was clients to identify areas of improvement within
              thei designerr organization This could desi range from
              streamlining{" "}
            </p>
            {/* Button */}
            <Button
              buttonText={buttonText}
              buttonTextColor={buttonTextColor}
              buttonBackgroundColor={buttonBackgroundColor}
              borderColor={borderColor}
              iconColor={iconColor}
              borderRadius={borderRadius}
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default ServiceAbout;
