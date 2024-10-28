import { useEffect, useState } from "react";
import testimonialImageOne from "../../../assets/home-one/images/testimonial/testimonial-one.png";
import testimonialImageThree from "../../../assets/home-one/images/testimonial/testimonial-three.png";
import testimonialImageTwo from "../../../assets/home-one/images/testimonial/testimonial-two.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Marvin Dee",
    text: "Using this AI-driven tool has completely transformed our business processes. The efficiency and accuracy it brings to our daily operations are unparalleled. We've seen a remarkable improvement in customer satisfaction and operational productivity.",
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
  const [currentIndex, setCurrentIndex] = useState(1);
  let location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

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
      className={`${
        location.pathname !== "/" ? "bg-[#1C2329]" : "bg-[#F0F5DA]"
      }`}
    >
      <div
        className={`overflow-hidden relative py-[80px] lg:py-[110px] ${
          location.pathname !== "/" ? "text-[#FFFFFF] " : "text-[#10171E]"
        }`}
      >
        <div className="max-w-[915px] mx-auto text-center">
          <div className="flex justify-center items-center mb-8 ">
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="text-homeOnePrimary w-[80px] h-[80px]"
            />
          </div>
          <p className="relative max-w-[900px] mx-auto px-[10px] font-semibold">
            {testimonials[currentIndex].text}
          </p>
          <div className="flex items-center justify-center space-x-8 mt-[40px] relative">
            <div className="absolute left-[30%] transform -translate-x-full flex flex-col items-center opacity-50">
              <img
                src={testimonials[prevIndex].image}
                alt={testimonials[prevIndex].name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex space-x-1 my-[10px]">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < testimonials[prevIndex].rating
                        ? "text-[#F7BB40]"
                        : "text-[#E7EDF4]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927C9.349 2.001 10.651 2.001 10.951 2.927L12.123 6.566C12.237 6.94 12.59 7.195 12.98 7.195H16.658C17.643 7.195 18.045 8.493 17.264 9.054L14.232 11.151C13.931 11.372 13.805 11.782 13.92 12.155L15.091 15.795C15.391 16.721 14.391 17.493 13.609 16.932L10.577 14.835C10.276 14.614 9.724 14.614 9.423 14.835L6.391 16.932C5.609 17.493 4.609 16.721 4.909 15.795L6.08 12.155C6.195 11.782 6.069 11.372 5.768 11.151L2.736 9.054C1.955 8.493 2.357 7.195 3.342 7.195H7.02C7.41 7.195 7.763 6.94 7.877 6.566L9.049 2.927Z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-sm font-semibold">
                {testimonials[prevIndex].name}
              </h3>
            </div>
            <div className="z-10 flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex space-x-1 justify-center my-[10px]">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonials[currentIndex].rating
                        ? "text-[#F7BB40]"
                        : "text-[#E7EDF4]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927C9.349 2.001 10.651 2.001 10.951 2.927L12.123 6.566C12.237 6.94 12.59 7.195 12.98 7.195H16.658C17.643 7.195 18.045 8.493 17.264 9.054L14.232 11.151C13.931 11.372 13.805 11.782 13.92 12.155L15.091 15.795C15.391 16.721 14.391 17.493 13.609 16.932L10.577 14.835C10.276 14.614 9.724 14.614 9.423 14.835L6.391 16.932C5.609 17.493 4.609 16.721 4.909 15.795L6.08 12.155C6.195 11.782 6.069 11.372 5.768 11.151L2.736 9.054C1.955 8.493 2.357 7.195 3.342 7.195H7.02C7.41 7.195 7.763 6.94 7.877 6.566L9.049 2.927Z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-[16px] font-semibold">
                {testimonials[prevIndex].name}
              </h3>
            </div>
            <div className="absolute right-[30%] transform translate-x-full flex flex-col items-center opacity-50">
              <img
                src={testimonials[nextIndex].image}
                alt={testimonials[nextIndex].name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex space-x-1 my-[10px]">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < testimonials[nextIndex].rating
                        ? "text-[#F7BB40]"
                        : "text-[#E7EDF4]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927C9.349 2.001 10.651 2.001 10.951 2.927L12.123 6.566C12.237 6.94 12.59 7.195 12.98 7.195H16.658C17.643 7.195 18.045 8.493 17.264 9.054L14.232 11.151C13.931 11.372 13.805 11.782 13.92 12.155L15.091 15.795C15.391 16.721 14.391 17.493 13.609 16.932L10.577 14.835C10.276 14.614 9.724 14.614 9.423 14.835L6.391 16.932C5.609 17.493 4.609 16.721 4.909 15.795L6.08 12.155C6.195 11.782 6.069 11.372 5.768 11.151L2.736 9.054C1.955 8.493 2.357 7.195 3.342 7.195H7.02C7.41 7.195 7.763 6.94 7.877 6.566L9.049 2.927Z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-sm font-semibold">
                {testimonials[nextIndex].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Review;
