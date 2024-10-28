import { Helmet } from "react-helmet-async";
import About from "../../components/about-us/About/About";
import AboutBanner from "../../components/about-us/AboutBanner/AboutBanner";
import EventGallery from "../../components/about-us/EventGallery/EventGallery";
import Client from "../../components/home-one/Client/Client";
import Review from "../../components/home-one/Review/Review";
import SocialNetworks from "../../components/home-one/SocialNetworks/SocialNetworks";
import FAQ from "../../components/shared/FAQ/FAQ";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const AboutUs = () => {
  return (
    <>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | About Us</title>
      </Helmet>
      <PageTitle heading={"About Us"} />
      {/* Components */}
      <AboutBanner />
      <About />
      <Client />
      <Review />
      <FAQ />
      <EventGallery />
      <SocialNetworks />
    </>
  );
};

export default AboutUs;
