import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import Container from "../../shared/Container/Container";

// Services data
const services = [
  {
    id: 1,
    name: "UI/UX",
    description:
      "Our UI/UX design services focus on creating user-friendly and aesthetically pleasing interfaces that enhance user experience and drive engagement.",
  },
  {
    id: 2,
    name: "Strategy",
    description:
      "We develop comprehensive strategies that align with your business goals and help you achieve long-term success in a competitive market.",
  },
  {
    id: 3,
    name: "Branding",
    description:
      "Our branding services ensure your brand stands out with a unique identity, creating a strong connection with your target audience.",
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
        <Accordion disableIndicatorAnimation={true} showDivider={false}>
          {services.map((service, index) => (
            <AccordionItem
              className={`${
                index !== services.length - 1
                  ? "border-b-1 border-[#10171E] dark:border-[#FFFFFF] "
                  : ""
              }`}
              key={index}
              aria-label={service.name}
              indicator={({ isOpen }) => (
                <span
                  className={`flex items-center justify-center w-[35px] h-[35px] md:w-[50px] md:h-[50px] p-[5px] rounded-full border ${
                    isOpen
                      ? "border-homeThreePrimary bg-[#f7f7fe] dark:bg-homeThreePrimary"
                      : "border-[#10171E] bg-[#FFFFFF] dark:bg-[#10171E] dark:border-[#FFFFFF]"
                  }`}
                >
                  <svg
                    width="75"
                    height="76"
                    viewBox="0 0 75 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8054_602)">
                      <path
                        d="M26.034 19.3097L26.034 24.5166L46.8616 24.5166L16.736 54.6422L20.4552 58.3615L50.5808 28.2358V49.0634H55.7877V19.3097H26.034Z"
                        className={
                          isOpen
                            ? "fill-homeThreePrimary dark:fill-[#FFFFFF]"
                            : "fill-[#10171E] dark:fill-[#FFFFFF]"
                        }
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8054_602">
                        <rect
                          width="52.5976"
                          height="52.5976"
                          fill="white"
                          transform="translate(0 37.9023) rotate(-45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              )}
              title={
                <p className="text-[50px] md:text-[100px] font-extrabold py-[20px] md:py-[60px]">
                  {service.name}
                </p>
              }
            >
              {
                <p className="w-[90%] text-[18px] pb-[20px]">
                  {service.description}
                </p>
              }
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </motion.section>
  );
};

export default Service;
