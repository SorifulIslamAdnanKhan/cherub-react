import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import faqImage from "../../../assets/home-one/images/common-faq/faq-image.png";
import Container from "../Container/Container";
import { motion } from "framer-motion";

// Common FAQs data
const commonFAQs = [
  {
    id: "1",
    title: "What exactly does a business consultant do?",
    content:
      "A business consultant provides expert advice to improve business processes, strategies, and efficiency.",
  },
  {
    id: "2",
    title: "What are services a business consultant offer?",
    content:
      "Business consultants offer services ranging from strategy development, and financial planning.",
  },
  {
    id: "3",
    title: "How long does a typical consulting session last?",
    content:
      "The length of a consulting engagement can vary, but most engagements last between a few weeks.",
  },
  {
    id: "4",
    title: "What is the cost of hiring a business consultant?",
    content:
      "The cost of hiring a business consultant depends on their experience and the scope of the project.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      className="bg-[#FFFFFF] dark:bg-[#000000] my-[90px] lg:my-[120px] xl:my-[150px]"
    >
      <Container>
        <div className="grid lg:grid-cols-12 items-center gap-[30px] lg:gap-0">
          <div className="w-full lg:w-[550px] xl:w-[690px] mx-auto h-[610px] md:h-[505px] lg:col-span-5 xl:col-span-6 z-10 bg-white dark:bg-[#1C2329] shadow px-2 pt-[70px] md:px-[40px] rounded-xl">
            {/* Top texts */}
            <div className="px-3 pb-6">
              <p className="font-bold mb-[10px]">Common Faq</p>
              <h2 className="max-w-[330px] leading-tight">
                Charting Your Course to Excellence
              </h2>
            </div>
            {/* FAQs */}
            {commonFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className={`${
                  openIndex === index
                    ? "border-[#10171E] dark:border-[#E7E7EB]"
                    : "border-[#E7E7EB]"
                } border-1 rounded-lg mb-[10px]`}
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`${
                    openIndex === index ? "bg-[#F0F5DA] rounded-t-lg" : ""
                  } flex justify-between items-center cursor-pointer p-[10px]`}
                >
                  <p
                    className={`font-bold text-[18px] ${
                      openIndex === index ? "text-[#10171E]" : ""
                    }`}
                  >
                    {faq.title}
                  </p>
                  <FontAwesomeIcon
                    className={openIndex === index ? "text-[#10171E]" : ""}
                    icon={openIndex === index ? faAngleDown : faAngleUp}
                  />
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                    transition: { duration: 0.4 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="p-[10px]">{faq.content}</p>
                </motion.div>
              </div>
            ))}
          </div>
          {/* Faq image */}
          <div className="lg:col-span-7 xl:col-span-6">
            <img className="w-full" src={faqImage} alt="Faq Image" />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
