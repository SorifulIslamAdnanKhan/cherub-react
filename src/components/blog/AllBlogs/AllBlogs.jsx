import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import blogFive from "../../../assets/images/blog/blog-five.png";
import blogFour from "../../../assets/images/blog/blog-four.png";
import blogOne from "../../../assets/images/blog/blog-one.png";
import blogThree from "../../../assets/images/blog/blog-three.png";
import blogTwo from "../../../assets/images/blog/blog-two.png";
import BlogCard from "../../cards/BlogCard/BlogCard";
import Pagination from "../../shared/Pagination/Pagination";

const AllBlogs = () => {
  // All posts data
  const allPosts = [
    {
      id: 1,
      image: blogOne,
      posted_date: "October 19, 2023",
      title: "Business Consulting Involves Providing",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 2,
      image: blogTwo,
      posted_date: "October 20, 2023",
      title: "Organizations Aiming to Improve",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 3,
      image: blogThree,
      posted_date: "October 21, 2023",
      title: "Consultants Often Is Work Closely",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 4,
      image: blogFour,
      posted_date: "October 22, 2023",
      title: "It Serves As A Visual Representation",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 5,
      image: blogFive,
      posted_date: "October 23, 2023",
      title: "Unique Style and Desi Personality",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 6,
      image: blogOne,
      posted_date: "October 21, 2023",
      title: "Consultants Often Is Work Closely",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 7,
      image: blogTwo,
      posted_date: "October 22, 2023",
      title: "It Serves As A Visual Representation",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
    {
      id: 8,
      image: blogThree,
      posted_date: "October 23, 2023",
      title: "Unique Style and Desi Personality",
      short_description:
        "Consultants often work closely with clients to understand their unique challenges and goals des offering tailored solutions to address specific needs. This may involve conducting designi market research ltimately, business consulting aims to help organizations",
    },
  ];

  const { searchQuery } = useOutletContext();

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    setPosts(allPosts);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination functionality
  const lastPage = currentPage * postsPerPage;
  const firstPage = lastPage - postsPerPage;
  const currentPostsPerPage = filteredPosts.slice(firstPage, lastPage);

  return (
    <div>
      {currentPostsPerPage.map((blog) => (
        <div key={blog.id} className="flex flex-col">
          <BlogCard blog={blog} />
        </div>
      ))}
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default AllBlogs;
