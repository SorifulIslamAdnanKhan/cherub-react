import { useState } from "react";
import video from "../../../assets/home-one/images/service/video.png";
import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  // Video modal
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      className="mb-[90px] lg:mb-[120px] xl:mb-[150px]"
    >
      <Container>
        <div className="relative">
          {/* Video image */}
          <img className="w-full" src={video} alt="Video" />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon
              onClick={openModal}
              icon={faCirclePlay}
              className="w-[30px] h-[30px] md:w-[50px] :h-[50px] text-[#FFFFFF] cursor-pointer"
            />
          </div>
          {/* Video modal */}
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
              <div className="relative">
                <FontAwesomeIcon
                  onClick={closeModal}
                  icon={faXmark}
                  className="w-8 h-8 absolute -top-5 -right-8 sm:-right-14 p-4 text-[#FFFFFF]"
                />{" "}
                <iframe
                  className="w-full md:w-[520px] mx-auto h-96"
                  src="https://www.youtube.com/embed/EEeu7-xJX_c"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </Container>
    </motion.section>
  );
};

export default Video;
