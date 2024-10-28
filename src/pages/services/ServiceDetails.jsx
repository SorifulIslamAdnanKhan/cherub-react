import { Helmet } from "react-helmet-async";
import Details from "../../components/service-details/Details";
import Sidebar from "../../components/service-details/Sidebar";
import Container from "../../components/shared/Container/Container";
import FAQ from "../../components/shared/FAQ/FAQ";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const ServiceDetails = () => {
  return (
    <>
      <PageTitle heading={"Service Detail "} />
      <Container>
        {/* Page Titles */}
        <Helmet>
          <title>Cherub | Service Detail </title>
        </Helmet>
        {/* Components */}
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-0 mb-[90px] lg:mb-[120px] xl:mb-[150px]">
          <div className="lg:col-span-2">
            <Details />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
        {/* FAQ */}
        <FAQ />
      </Container>
    </>
  );
};

export default ServiceDetails;
