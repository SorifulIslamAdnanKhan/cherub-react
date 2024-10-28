import { Helmet } from "react-helmet-async";
import About from "../../../components/home-three/About/About";
import Banner from "../../../components/home-three/Banner/Banner";
import Blog from "../../../components/home-three/Blog/Blog";
import Counter from "../../../components/home-three/Counter/Counter";
import Experience from "../../../components/home-three/Experience/Experience";
import Portfolio from "../../../components/home-three/Portfolio/Portfolio";
import Review from "../../../components/home-three/Review/Review";
import Service from "../../../components/home-three/Service/Service";
import Skills from "../../../components/home-three/Skills/Skills";
import SocialNetworks from "../../../components/home-three/SocialNetworks/SocialNetworks";

const HomeThree = () => {
  return (
    <>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Home Three</title>
      </Helmet>
      <Banner />
      <About />
      <Review />
      <Service />
      <Skills />
      <Experience />
      <Portfolio />
      <SocialNetworks />
      <Counter />
      <Blog />
    </>
  );
};

export default HomeThree;
