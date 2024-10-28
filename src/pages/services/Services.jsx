import { Helmet } from "react-helmet-async";
import SocialNetworks from "../../components/home-one/SocialNetworks/SocialNetworks";
import ServiceAbout from "../../components/services/ServiceAbout/ServiceAbout";
import Video from "../../components/services/Video/Video";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import AllServices from "../../components/services/AllServices/AllServices";

const Services = () => {
  return (
    <div>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Services</title>
      </Helmet>
      <PageTitle heading={"Services"} />
      {/* Components */}
      <AllServices />
      <ServiceAbout />
      <SocialNetworks />
      <Video />
    </div>
  );
};

export default Services;
