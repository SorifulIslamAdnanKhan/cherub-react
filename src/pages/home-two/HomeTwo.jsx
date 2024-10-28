import { Helmet } from "react-helmet-async";
import About from "../../components/home-two/About/About";
import Banner from "../../components/home-two/Banner/Banner";
import Blog from "../../components/home-two/Blog/Blog";
import CallToAction from "../../components/home-two/CallToAction/CallToAction";
import Client from "../../components/home-two/Client/Client";
import Counter from "../../components/home-two/Counter/Counter";
import Gallery from "../../components/home-two/Gallery/Gallery";
import Review from "../../components/home-two/Review/Review";
import Service from "../../components/home-two/Service/Service";

const HomeTwo = () => {
  return (
    <>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Home Two</title>
      </Helmet>
      <Banner />
      <Service />
      <About />
      <Counter />
      <Gallery />
      <Review />
      <Blog />
      <Client />
      <CallToAction />
    </>
  );
};

export default HomeTwo;
