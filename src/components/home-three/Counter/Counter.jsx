import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Container from "../../shared/Container/Container";
import { useRef } from "react";

// Counter data
const counters = [
  { id: 1, value: 800, label: "Client reviews" },
  { id: 2, value: 100, label: "Team Members" },
  { id: 3, value: 20000, label: "Followers" },
  { id: 4, value: 20, label: "Award Winning" },
];

const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        <div className="max-w-[810px] mb-[60px]">
          <h1 className="capitalize leading-tight">
            Empowering Portfolio{" "}
            <span className="font-light">to Reach New</span> Heights
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          {counters.map((counter) => (
            <div
              key={counter.id}
              className="border-l border-[#10171E] dark:border-[#FFFFFF] px-[20px] py-[30px] bg-[#FFFFFF] dark:bg-[#1C2329] shadow-lg"
            >
              <motion.p
                ref={ref}
                className="font-bold text-[40px] lg:text-[60px] xl:text-[96px] leading-none"
              >
                {isInView && (
                  <CountUp
                    start={0}
                    end={counter.value}
                    duration={2}
                    formattingFn={(value) =>
                      counter.id === 3
                        ? `${(value / 1000).toFixed(0)}k+`
                        : `${value}+`
                    }
                  />
                )}
              </motion.p>
              <h4>{counter.label}</h4>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Counter;
