import eventFive from "../../../assets/home-one/images/event/event-five.png";
import eventFour from "../../../assets/home-one/images/event/event-four.png";
import eventOne from "../../../assets/home-one/images/event/event-one.png";
import eventSix from "../../../assets/home-one/images/event/event-six.png";
import eventThree from "../../../assets/home-one/images/event/event-three.png";
import eventTwo from "../../../assets/home-one/images/event/event-two.png";
import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";

// Event Data
const events = [
  {
    id: 1,
    image: eventOne,
    alt: "Event One",
  },
  {
    id: 2,
    image: eventTwo,
    alt: "Event Two",
  },
  {
    id: 3,
    image: eventThree,
    alt: "Event Three",
  },
  {
    id: 4,
    image: eventFour,
    alt: "Event Four",
  },
  {
    id: 5,
    image: eventFive,
    alt: "Event Five",
  },
  {
    id: 6,
    image: eventSix,
    alt: "Event Six",
  },
];

const EventGallery = () => {
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
      className="max-w-[1920px] mx-auto"
    >
      <Container>
        {/* Event heading */}
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-6 lg:gap-0 mb-[80px]">
          <h1 className="leading-none">Event Gallery</h1>
          <p className="max-w-[560px]">
            Distracted by the readable content of a page when looking atits
            layout io The point of using Lorem Ipsum is that it has a more
            Distracted by the readable content
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] ">
          {/* Map through event images */}
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`relative group ${
                index === 1
                  ? "md:col-span-6"
                  : index === 0 || index === 2
                  ? "md:col-span-3"
                  : "md:col-span-4"
              }`}
            >
              <img
                src={event.image}
                alt={event.alt}
                className="w-full h-full transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default EventGallery;
