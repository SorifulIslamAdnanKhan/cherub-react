import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Button from "../../shared/Button/Button";
import Container from "../../shared/Container/Container";
import { useRef } from "react";

const counters = [
  { id: 1, value: 80000, label: "Followers" },
  { id: 2, value: 200, label: "Team Members" },
  { id: 3, value: 800, label: "Client reviews" },
  { id: 4, value: 100, label: "Award Winning" },
];

const AboutBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Button text and styles
  const buttonText = "Read More";
  const buttonTextColor = "text-[#FFFFFF]";
  const buttonBackgroundColor = "bg-[#10171E]";
  const borderColor = "border-transparent";
  const iconColor = "text-homeOnePrimary";
  const borderRadius = "rounded-full";

  // Animation variants
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
      className="pb-[90px] lg:pb-[120px] xl:pb-[150px]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Section text and description */}
          <div className="space-y-10">
            <h1 className="capitalize leading-tight">
              Strategies for Our
              <br /> <span className="font-extralight">business Solutions</span>
            </h1>
            <p className="max-w-[520px]">
              business consulting is about problem-solving. Consultants work
              closely with clients to identify areas of improvement within their
              organization. This could range from various business solutions.
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

          {/* Counters Side */}
          <div className="mt-10 lg:mt-0 grid grid-cols-2">
            {counters.map((counter, index) => {
              return (
                <div
                  key={counter.id}
                  className={`flex flex-col border-[#E7E7EB] ${
                    index % 2 === 0
                      ? "border-r"
                      : "items-end xl:items-start xl:pl-[60px] "
                  } ${
                    index < 2
                      ? "border-b pb-[20px] md:pb-[40px]"
                      : "pt-[20px] md:pt-[40px]"
                  }`}
                >
                  <motion.p
                    ref={ref}
                    className="font-bold text-[30px] md:text-[60px] xl:text-[100px] leading-none opacity-20"
                  >
                    {isInView && (
                      <CountUp
                        start={0}
                        end={counter.value}
                        duration={2}
                        formattingFn={(value) =>
                          counter.id === 1
                            ? `${(value / 1000).toFixed(0)}k+`
                            : `${value}+`
                        }
                      />
                    )}
                  </motion.p>
                  <p className=" font-bold text-[14px] md:text-[25px]">
                    {counter.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default AboutBanner;
