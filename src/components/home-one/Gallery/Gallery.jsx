import { Link } from "react-router-dom";
import workFour from "../../../assets/home-one/images/work/work-four.png";
import workOne from "../../../assets/home-one/images/work/work-one.png";
import workThree from "../../../assets/home-one/images/work/work-three.png";
import workTwo from "../../../assets/home-one/images/work/work-two.png";
import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";

// Work data
const works = [
  {
    id: 1,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: workOne,
  },
  {
    id: 2,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: workTwo,
  },
  {
    id: 3,
    title: "",
    description:
      "Business consulting is about problem-solving. Consultants work closely with clients to identify areas of improvement within their organization.",
  },
  {
    id: 4,
    title: "More Details",
  },
  {
    id: 5,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: workThree,
  },
  {
    id: 6,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: workFour,
  },
];

const Gallery = () => {
  //Animations
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
      <Container>
        {/* Section text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="font-bold leading-none">Gallery</p>
          <div className="flex-grow">
            <hr className="border-[#10171E] dark:border-[#FFFFFF]" />
          </div>
        </div>
        <div>
          {/* Work heading */}
          <div className="mt-[80px] mb-[30px]">
            <span className="font-bold text-[80px] lg:text-[150px] leading-none">
              Work
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {works.map((work, index) => (
              <div key={work.id} className="relative group">
                {/* Conditional rendering for different work items */}
                {work.image ? (
                  /* Render work item with image (for items 1, 2, 5, and 6) */
                  <img src={work.image} alt={work.title} className="w-full" />
                ) : index === 2 ? (
                  /* Special case for the third item (custom text description) */
                  <div className="h-full lg:h-auto flex flex-row justify-center items-center lg:justify-end ">
                    <p className="max-w-[260px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
                      {work.description}
                    </p>
                  </div>
                ) : index === 3 ? (
                  /* Special case for the fourth item (More Details button) */
                  <Link
                    to="#"
                    className="h-full flex justify-center items-center lg:items-end"
                  >
                    <div className="w-[190px] h-[190px] flex justify-center items-center bg-[#F0F5DA] dark:bg-[#1C2329] dark:border dark:border-homeOnePrimary rounded-full">
                      <p className="max-w-[75px] uppercase leading-none">
                        {work.title}
                      </p>
                    </div>
                  </Link>
                ) : null}

                {/* Default structure for works with image (if title and description exist) */}
                {work.image && (
                  <div className="w-[90%] left-1/2 -translate-x-1/2 mx-auto opacity-0 invisible absolute bottom-[20px] group-hover:opacity-100 group-hover:visible bg-[#F0F5DA] p-[10px] rounded-2xl transition-opacity duration-400 ease-in">
                    <Link
                      href="#"
                      className="flex flex-col justify-center items-center cursor-pointer"
                    >
                      <h3 className="leading-none text-[#10171E]">
                        {work.title}
                      </h3>
                      <p className="max-w-[300px] text-[#7F6666] text-center mt-[10px]">
                        {work.description}
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Gallery;
