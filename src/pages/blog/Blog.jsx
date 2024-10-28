import { Helmet } from "react-helmet-async";
import AllBlogs from "../../components/blog/AllBlogs/AllBlogs";

const Blog = () => {
  return (
    <>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Blog </title>
      </Helmet>
      {/* Components */}
      <AllBlogs />
    </>
  );
};

export default Blog;
