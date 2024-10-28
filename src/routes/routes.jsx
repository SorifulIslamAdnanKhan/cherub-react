import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogApp from "../BlogApp";
import HomeThreeLayout from "../components/layout/home-three/HomeThreeLayout/HomeThreeLayout";
import HomeTwoLayout from "../components/layout/home-two/HomeTwoLayout/HomeTwoLayout";
import ErrorPage from "../components/shared/ErrorPage/ErrorPage";
import AboutUs from "../pages/about-us/AboutUs";
import Blog from "../pages/blog/Blog";
import ComingSoon from "../pages/coming-soon/ComingSoon";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home-one/Home";
import HomeThree from "../pages/home-three/HomeThree/HomeThree";
import HomeTwo from "../pages/home-two/HomeTwo";
import ProjectDetails from "../pages/projects/ProjcetDetails";
import Projects from "../pages/projects/Projects";
import ServiceDetails from "../pages/services/ServiceDetails";
import Services from "../pages/services/Services";
import SingleBlog from "../pages/blog/SingleBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <BlogApp />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: "single-blog",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
    ],
  },

  {
    path: "/home-two",
    element: <HomeTwoLayout />,
    children: [
      {
        index: true,
        element: <HomeTwo />,
      },
    ],
  },
  {
    path: "/home-three",
    element: <HomeThreeLayout />,
    children: [
      {
        index: true,
        element: <HomeThree />,
      },
    ],
  },
]);

export default router;
