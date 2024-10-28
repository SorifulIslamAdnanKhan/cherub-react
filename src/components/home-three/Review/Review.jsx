import { useEffect, useState } from "react";
import Container from "../../shared/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Testimonials
const testimonials = [
  {
    id: 1,
    text: "A personal portfolio serves as a powerful tool to spotlight an individual's unique expertise and creative abilities. It not only showcases their professional skills and accomplishments but also offers a compelling narrative of their journey, demonstrating the potential value they can bring to clients.",
    author: "Eleanor Pena",
    position: "Marketing Coordinator",
    rating: 5,
  },
  {
    id: 2,
    text: "A personal portfolio is a dynamic platform that enables you to effectively showcase your skills, experience, and unique strengths. It serves as a comprehensive visual and textual representation of your professional journey, allowing potential clients to gain deeper insights into your capabilities.",
    author: "Michael Scott",
    position: "Regional Manager",
    rating: 4,
  },
  {
    id: 3,
    text: "Creating a well-crafted portfolio is vital for anyone aiming to present their work in a professional and visually appealing manner. A thoughtfully designed portfolio not only highlights the quality and range of your work but also reflects your attention to detail and commitment to excellence.",
    author: "Pam Beesly",
    position: "Design Lead",
    rating: 5,
  },
  {
    id: 4,
    text: "Having a well-crafted portfolio is crucial for anyone who wants to present their work in a professional and appealing manner. A carefully designed portfolio not only showcases the quality and diversity of your projects but also demonstrates your dedication to excellence and keen eye for detail.",
    author: "Alan John",
    position: "Support Lead",
    rating: 5,
  },
];
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { text, author, position, rating } = testimonials[currentIndex];

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
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px] bg-[#F7F7FE] dark:bg-[#1C2329]"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px] py-[50px]">
          <div className="max-w-[530px] capitalize leading-tight">
            <span className="text-[80px] font-extrabold">Skills</span>
            <p className="text-[34px] md:text-[32px] lg:text-[45px] xl:text-[60px]">
              Essential Personal
            </p>
            <span className="text-[50px] font-extrabold">Portfolio</span>
          </div>
          <div>
            {/* Quotation Icon */}

            <FontAwesomeIcon
              icon={faQuoteRight}
              className="text-[#10171E] text-[40px] dark:text-[#FFFFFF]"
            />

            {/* Stars */}
            <div className="flex mt-[10px]">
              {[...Array(rating)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-[#10171E] dark:text-[#FFFFFF] text-sm pr-1"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="max-w-[550px] text-[#10171E] dark:text-[#FFFFFF] my-[10px]">
              {text}
            </p>

            {/* Author Name and Position */}
            <h4 className="font-semibold text-[#10171E] dark:text-[#FFFFFF]">
              {author}
            </h4>
            <p className="text-[#10171E] dark:text-[#FFFFFF]">{position}</p>

            {/* Pagination Dots */}
            <div className="flex mt-[15px] space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? "bg-homeThreePrimary dark:bg-[#FFFFFF] dark:border border-homeThreePrimary"
                      : "bg-[#797979] border border-homeThreePrimary"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Review;
