import blogImageOne from "../../../assets/home-one/images/blog/blog-one.png";
import Container from "../../shared/Container/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RightAngleArrow from "../../icons/RightAngleArrow";

const Blog = () => {
  // Blog Post Data
  const blogPosts = [
    {
      id: 1,
      title: "Turning Challenges into Opportunities",
      date: "31 Dec, 2023",
      comments: "24",
      image: blogImageOne,
      link: "#",
    },
    {
      id: 2,
      title: "Empowering Businesses Empowering Futures",
      date: "31 June, 2024",
      comments: "35",
      image: blogImageOne,
      link: "#",
    },
    {
      id: 3,
      title: "Unlocking Potential Maximizing Performance",
      date: "15 Feb, 2024",
      comments: "18",
      image: blogImageOne,
      link: "#",
    },
    {
      id: 4,
      title: "Building Better Businesses Building Brighter Futures",
      date: "30 Mar, 2024",
      comments: "18",
      image: blogImageOne,
      link: "#",
    },
  ];

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
      className="relative mt-[90px] lg:mt-[120px] xl:mt-[150px]"
    >
      <Container>
        {/* Section text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="font-bold leading-none">Blog</p>
          <div className="flex-grow">
            <hr className="border-[#10171E] dark:border-[#FFFFFF]" />
          </div>
        </div>
        <div>
          {/* Blog heading */}
          <div className="max-w-[450px] mt-[80px] mb-[70px]">
            <h1 className="capitalize leading-tight">
              Bringing Clarity{" "}
              <span className="font-extralight">to Complexity</span>
            </h1>
          </div>
          {/* Blog content */}
          <div className="ml-0 md:ml-[25%]">
            {blogPosts?.map((post, index) => (
              <div
                key={index}
                className="group flex justify-between border-b-2 pb-[16px] mb-[30px] border-[#E7E7EB] dark:border-[#10171E] dark:hover:border-[#E7E7EB] hover:border-[#10171E]"
              >
                <div>
                  <Link to={post.link}>
                    <h3 className="mb-[15px]">{post.title}</h3>
                  </Link>
                  <span className="mr-[5px] dark:font-extralight">
                    {post.date}
                  </span>{" "}
                  <span className="dark:font-extralight">
                    Comments ({post.comments})
                  </span>
                </div>
                <RightAngleArrow />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Blog;
