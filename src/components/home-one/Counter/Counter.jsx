import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import Container from "../../shared/Container/Container";

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
        {/* Section Text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="font-bold leading-none">Company Insights</p>
          <div className="flex-grow">
            <hr className="border-[#10171E] dark:border-[#FFFFFF]" />
          </div>
        </div>
        <div className="mt-[80px]">
          {/* Company Insight Heading*/}
          <h1 className="max-w-[960px] capitalize leading-tight">
            Strategies for Success{" "}
            <span className="font-extralight">
              business Solutions for Growth
            </span>{" "}
            consulting involves providing
          </h1>
          {/* Company Insight Text*/}
          <div className=" my-[80px] flex justify-end items-center">
            <p className="max-w-[520px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
              business consulting is about problem-solving. Consultants work wi
              closely with was clients to identify areas of improvement withinde
              thei designerr organization This could designe desi range business
              consulting is about problem-solving. Consultants work{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[50px]">
            {/* Counter One*/}
            {counters.map((counter, index) => {
              return (
                <div key={index}>
                  <motion.p
                    ref={ref}
                    className="font-bold text-[80px] lg:text-[100px] opacity-20 leading-none"
                  >
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
                  <h3 className="leading-none mt-[20px]">{counter.label}</h3>
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
