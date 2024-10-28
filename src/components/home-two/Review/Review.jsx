import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testimonialImageOne from "../../../assets/home-two/images/testimonial/testimonial.png";
import testimonialImageTwo from "../../../assets/home-one/images/testimonial/testimonial-two.png";
import testimonialImageThree from "../../../assets/home-one/images/testimonial/testimonial-three.png";
import {
  faAngleRight,
  faAngleLeft,
  faStar,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.It's not just about automation, but also about gaining insights that were previously hidden. Our decision-making process is backed by data-driven analytics.",
    name: "Cameron Williamson",
    image: testimonialImageOne,
    rating: 4,
  },
  {
    id: 2,
    name: "Robert Fox",
    text: "The integration of AI technology into our workflow has been a game changer. It's not just about automation, but also about gaining insights that were previously hidden. Our decision-making process is now backed by data-driven analytics, which has boosted our growth.",
    image: testimonialImageTwo,
    rating: 5,
  },
  {
    id: 3,
    name: "Jenny Wilson",
    text: "I was initially skeptical about adopting AI, but this system has exceeded all my expectations. The user interface is intuitive, and the support team is incredibly responsive. We've managed to cut down our processing time by half, which is incredible for our team.",
    image: testimonialImageThree,
    rating: 4,
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
    );
  };

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
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px] px-[20px] md:px-[50px]"
    >
      <div className="relative ">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className={`w-[25px] h-[25px] md:w-[35px] md:h-[35px] absolute left-[-17.5px] md:left-[-25px] xl:left-0 top-[50%] 
            ${
              activeIndex === 0
                ? "bg-[#f9efec] text-homeTwoPrimary"
                : "bg-homeTwoPrimary text-[#FFFFFF]"
            } flex items-center justify-center transition-colors duration-300
            `}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <Container>
          <div className="relative">
            {/* Background Circles */}
            <div className="absolute w-[15px] h-[15px] bg-homeTwoPrimary rounded-full left-[10%] top-[120px] transition-all ease-in-out duration-300 animate-float "></div>
            <div className="absolute w-[20px] h-[20px] bg-homeTwoPrimary rounded-full right-[10%] top-[80px] transition-all ease-in-out duration-300 animate-float"></div>
            <div className="absolute w-[10px] h-[10px] bg-homeTwoPrimary rounded-full right-[15%] md:right-[28%] top-[430px] md:top-[380px] transition-all ease-in-out duration-300 animate-float"></div>
          </div>
          {/* Testimonial Content */}
          <div className="text-center bg-[#1C2329] py-[50px]">
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="text-homeTwoPrimary opacity-50 text-[50px]"
              />
              <img
                className="w-16 h-16 rounded-full my-[20px]"
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
              />
            </div>
            <p className="max-w-[600px] mx-auto text-[#FFFFFF] px-[10px]">
              {testimonials[activeIndex].text}
            </p>

            <div className="mt-[20px]">
              <p className="font-semibold text-[#FFFFFF] mb-[10px]">
                {testimonials[activeIndex].name}
              </p>
              {/* Star Rating */}
              {Array(testimonials[activeIndex].rating)
                .fill()
                .map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-[#F8BC26] text-sm pr-1"
                  />
                ))}
              {Array(5 - testimonials[activeIndex].rating)
                .fill()
                .map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-[#E7E7EB] text-sm"
                  />
                ))}
            </div>
          </div>
        </Container>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className={`w-[25px] h-[25px] md:w-[35px] md:h-[35px] absolute top-[50%] right-[-17.5px] md:right-[-25px] xl:right-0 
            ${
              activeIndex === testimonials.length - 1
                ? "bg-[#f9efec] text-homeTwoPrimary"
                : "bg-homeTwoPrimary text-[#FFFFFF]"
            } flex items-center justify-center transition-colors duration-300
            `}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </motion.section>
  );
};

export default Review;
