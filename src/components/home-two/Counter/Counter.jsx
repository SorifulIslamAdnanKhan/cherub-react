import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import bgCounter from "../../../assets/home-two/background/bg-counter.png";
import counterImage from "../../../assets/home-two/images/counter/counter.png";
import Container from "../../shared/Container/Container";
import { useRef } from "react";

// Counter data
const counters = [
  { id: 1, value: 800, label: "Client reviews" },
  { id: 2, value: 80000, label: "Followers" },
  { id: 3, value: 200, label: "Team Members" },
];
const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        <div className="flex flex-col md:flex-row gap-[50px] md:gap-[140px] items-center">
          {/* Counter Background Image*/}
          <div
            style={{
              backgroundImage: `url(${bgCounter})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
              backgroundSize: "300px",
            }}
          >
            {/* Counter Image*/}
            <img
              src={counterImage}
              className="pl-[80px] pb-[40px] "
              alt="Counter Image"
            />
          </div>

          {/* Counter Content*/}
          <div>
            {counters.map((counter, index) => {
              return (
                <div key={index}>
                  <motion.p ref={ref} className="font-bold text-[60px] ">
                    {isInView && (
                      <CountUp
                        start={0}
                        end={counter.value}
                        duration={2}
                        formattingFn={(value) =>
                          counter.id === 2
                            ? `${(value / 1000).toFixed(0)}k+`
                            : `${value}+`
                        }
                      />
                    )}
                  </motion.p>
                  <p className="font-bold text-[#7F6666] dark:text-[#FFFFFF]">
                    {counter.label}
                  </p>

                  {index < 2 && (
                    <hr className="mt-[20px] dark:border-homeTwoPrimary" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Counter;
