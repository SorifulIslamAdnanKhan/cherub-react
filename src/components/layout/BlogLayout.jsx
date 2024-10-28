import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../blog/Sidebar/Sidebar";
import Container from "../shared/Container/Container";
import PageTitle from "../shared/PageTitle/PageTitle";

const BlogLayout = () => {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <PageTitle
        heading={
          location.pathname === "/blog/blog-details" ? "Blog Details" : "Blog"
        }
      />
      {/* Layout for larger screens */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-0 my-[90px] lg:my-[120px] xl:my-[150px]">
          <div className="lg:col-span-2">
            <Outlet context={{ searchQuery }} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar handleSearchQueryChange={handleSearchQueryChange} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogLayout;
