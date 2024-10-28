import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  // Button text and styles
  const buttonText = "Read More";
  const buttonTextColor = "text-[#10171E]";
  const buttonBackgroundColor = "bg-homeOnePrimary";
  const borderColor = "border-transparent";
  const iconColor = "text-[#10171E]";
  const borderRadius = "rounded-none";

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
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mb-10 md:mb-14 xl:mb-20 p-5 bg-[#F0F5DA] dark:bg-[#1C2329] rounded-lg"
    >
      {/* Image container */}
      <div className="relative w-full">
        <img
          className="w-full h-auto object-cover"
          src={blog?.image}
          alt={blog?.title}
        />
        <div className="absolute top-3 right-3 flex justify-center items-center gap-2 py-[6px] px-[14px] text-sm font-medium bg-homeOnePrimary rounded">
          <FontAwesomeIcon icon={faUser} className="text-[#10171E]" />
          <p className="text-[#10171E]">Admin</p>
        </div>
      </div>

      {/* Body */}
      <div className="my-6">
        <div className="flex items-center gap-5 mb-[20px]">
          <div className="flex items-center gap-1 md:gap-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-homeOnePrimary w-[14px] h-[12px]"
            />
            <p className="text-[13px] md:text-sm">{blog?.posted_date}</p>
          </div>
          <div className="flex items-center gap-[2px] md:gap-2">
            <FontAwesomeIcon
              icon={faComments}
              className="text-homeOnePrimary w-[14px] h-[14px]"
            />
            <p className="text-[12px] md:text-sm">Comments (05)</p>
          </div>
        </div>
        <div className="mb-[40px]">
          <h1 className="mb-[30px] leading-none">{blog?.title}</h1>
          <p>{blog?.short_description}</p>
        </div>
        {/* Blog button */}
        <Link to="single-blog">
          <Button
            buttonText={buttonText}
            buttonTextColor={buttonTextColor}
            buttonBackgroundColor={buttonBackgroundColor}
            borderColor={borderColor}
            iconColor={iconColor}
            borderRadius={borderRadius}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
