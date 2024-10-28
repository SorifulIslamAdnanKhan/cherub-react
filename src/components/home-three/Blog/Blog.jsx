import Container from "../../shared/Container/Container";
import blogImageOne from "../../../assets/home-three/images/blog/blog-one.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Blog data
const blogs = [
  {
    id: 1,
    title: "Turning Challenges into Opportunities",
    date: "31 Dec, 2024",
    comments: 5,
    image: blogImageOne,
  },
  {
    id: 2,
    title: "Turning Challenges into Opportunities",
    date: "31 Dec, 2024",
    comments: 5,
    image: blogImageOne,
  },
  {
    id: 3,
    title: "Turning Challenges into Opportunities",
    date: "31 Dec, 2024",
    comments: 5,
    image: blogImageOne,
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

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
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px]"
    >
      <Container>
        <div className="max-w-[850px] mb-[80px] text-center">
          <h1 className="capitalize leading-tight">
            Precision in my{" "}
            <span className="font-light">personal Excellence</span> Execution
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[40px] md:gap-[80px] xl:gap-[110px]">
            {/* Left blog image */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="hidden md:block w-full h-auto object-cover"
            />
            {/* Right blog list */}
            <div className="space-y-[20px]">
              {blogs?.map((blog, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedBlog(blog)}
                  className={`cursor-pointer p-[10px] xl:p-[20px] border ${
                    selectedBlog.id === blog.id
                      ? "border-[#10171E] dark:border-[#FFFFFF]"
                      : "border-0"
                  }`}
                >
                  <div className="flex gap-[30px] xl:gap-[50px]">
                    <p className="mt-[8px]">{`0${index + 1}. `}</p>
                    <div>
                      <Link to="#">
                        <h3>{blog.title}</h3>
                      </Link>
                      <p className="text-sm text-[#7F6666] dark:text-[#FFFFFF] mt-[10px]">
                        {blog.date} Comments ({blog.comments})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Blog;
