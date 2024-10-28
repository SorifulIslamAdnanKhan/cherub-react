import LinkedIn from "../../icons/LinkedIn";
import Behance from "../../icons/Behance";
import Instagram from "../../icons/Instagram";
import WhatsApp from "../../icons/WhatsApp";
import Pintrest from "../../icons/Pintrest";
import SnapChat from "../../icons/SnapChat";
import Twitter from "../../icons/Twitter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Social channels data
const socialChannels = [
  { id: 1, name: "LinkedIn", image: LinkedIn, link: "#" },
  { id: 2, name: "Behance", image: Behance, link: "#" },
  { id: 3, name: "Instagram", image: Instagram, link: "#" },
  { id: 4, name: "WhatsApp", image: WhatsApp, link: "#" },
  { id: 5, name: "Pintrest", image: Pintrest, link: "#" },
  { id: 6, name: "SnapChat", image: SnapChat, link: "#" },
  { id: 7, name: "Twitter", image: Twitter, link: "#" },
];

const SocialNetworks = () => {
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
      className="my-[90px] lg:my-[120px] xl:my-[150px]"
    >
      <div className="flex flex-wrap justify-evenly gap-[10px] lg:gap-0">
        {/* Loop through socialChannels array and render each social channel */}
        {socialChannels.map((socialChannel, index) => (
          <div
            key={socialChannel.id}
            className={`border rounded-full w-[125px] h-[125px] flex justify-center items-center p-[20px] ${
              [1, 3, 5].includes(index) ? "lg:mt-[-60px] mt-0" : "mt-0"
            }`}
          >
            <Link to={socialChannel.link}>
              <div className="w-20 h-20 flex justify-center items-center">
                <socialChannel.image />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SocialNetworks;
