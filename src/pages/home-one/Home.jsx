import { Helmet } from "react-helmet-async";
import About from "../../components/home-one/About/About";
import Banner from "../../components/home-one/Banner/Banner";
import Blog from "../../components/home-one/Blog/Blog";
import Client from "../../components/home-one/Client/Client";
import Counter from "../../components/home-one/Counter/Counter";
import Gallery from "../../components/home-one/Gallery/Gallery";
import Review from "../../components/home-one/Review/Review";
import Service from "../../components/home-one/Service/Service";
import SocialNetworks from "../../components/home-one/SocialNetworks/SocialNetworks";

const Home = () => {
  return (
    <>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Home</title>
      </Helmet>
      <Banner />
      <Service />
      <About />
      <Counter />
      <Gallery />
      <Client />
      <Review />
      <Blog />
      <SocialNetworks />
    </>
  );
};

export default Home;
