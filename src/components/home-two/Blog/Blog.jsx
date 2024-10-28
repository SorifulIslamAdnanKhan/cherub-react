import Container from "../../shared/Container/Container";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionBackground from "../../icons/SectionBackground";

// Blog data
const blogs = [
  {
    id: 1,
    title: "Customized Solutions Except Service",
    date: "31 Dec 2023",
    comments: 25,
    description:
      "Financial planners help people gain knowledge about how to invest and save their money in the most efficient way possible.",
  },
  {
    id: 2,
    title: "Building Better Businesses Futures",
    date: "31 Dec 2023",
    comments: 25,
    description:
      "Financial planners help people gain knowledge about how to invest and save their money in the most efficient way possible.",
  },
  {
    id: 3,
    title: "Start Business Development Course",
    date: "31 Dec 2023",
    comments: 25,
    description:
      "Financial planners help people gain knowledge about how to invest and save their money in the most efficient way possible.",
  },
];

const Blog = () => {
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
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px]"
    >
      <Container>
        <div>
          <SectionBackground />
          <p className="font-bold my-[20px] leading-none">Blog</p>
          <h1 className="font-extrabold capitalize leading-none">
            Our Latest News
          </h1>
        </div>
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 items-center gap-[20px] lg:gap-[30px]">
          {blogs.map((blog, index) => (
            <div key={index}>
              <h3 className="mb-[18px] leading-tight">{blog.title}</h3>
              <span className="mr-[5px] text-[#7F6666]">{blog.date}</span>{" "}
              <span className="text-[#7F6666]">Comments ({blog.comments})</span>
              <p className="max-w-[400px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight mt-[20px]">
                {blog.description}
              </p>
              <Link
                to="#"
                className="flex items-center gap-[5px] mt-[18px] hover:text-homeTwoPrimary font-semibold"
              >
                Read More <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Blog;
