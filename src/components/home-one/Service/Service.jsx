import { Link } from "react-router-dom";
import ServiceOne from "../../icons/ServiceOne";
import ServiceTwo from "../../icons/ServiceTwo";
import ServiceThree from "../../icons/ServiceThree";
import ServiceFour from "../../icons/ServiceFour";
import ServiceFive from "../../icons/ServiceFive";
import ServiceSix from "../../icons/ServiceSix";
import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";

// Services data
const services = [
  {
    id: 1,
    name: "Where Imagination Meets Strategy",
    icon: ServiceOne,
  },
  {
    id: 2,
    name: "Turning Ideas into Iconic Brands",
    icon: ServiceTwo,
  },
  {
    id: 3,
    name: "Where Creativity Finds Its Voice",
    icon: ServiceThree,
  },
  {
    id: 4,
    name: "Your Brand's Success Starts",
    icon: ServiceFour,
  },
  {
    id: 5,
    name: "Transforming into Reality Concepts",
    icon: ServiceFive,
  },
  {
    id: 6,
    name: "Crafting the Future of Branding",
    icon: ServiceSix,
  },
];

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

const Service = () => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="my-[90px] lg:my-[120px] xl:my-[150px]"
    >
      <Container>
        {/* Section text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="font-bold leading-none">Service</p>
          <div className="flex-grow">
            <hr className="border-[#10171E] dark:border-[#FFFFFF]" />
          </div>
        </div>
        {/* Service heading */}
        <div className="mt-[80px]">
          <h1 className="leading-none">
            Best <span className="font-light">Service</span>
          </h1>
        </div>
        {/* All Services */}
        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group border border-[#7f6666] dark:border-[#FFFFFF] dark:hover:border-homeOnePrimary rounded-[20px] transition duration-400 ease-in hover:bg-[#f0f5da] dark:hover:bg-[#1C2329] ${
                index === 0 || index === 5
                  ? "col-span-1 md:col-span-2"
                  : "col-span-1"
              }`}
            >
              <div
                className={`max-w-[280px] lg:max-w-[360px] font-bold p-[20px] xl:p-[28px] ${
                  index === 0 || index === 5 ? "" : "text-center"
                }`}
              >
                <Link to="/service-details">
                  <h3 className="leading-tight">{service.name}</h3>
                </Link>
              </div>
              <div
                className={`flex ${
                  index === 0 || index === 5 ? "justify-end" : "justify-center"
                } items-center p-[40px] xl:p-[80px]`}
              >
                <service.icon />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Service;
