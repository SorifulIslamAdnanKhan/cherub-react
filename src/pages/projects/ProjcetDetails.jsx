import { Helmet } from "react-helmet-async";
import Details from "../../components/project-details/Details";
import Overview from "../../components/project-details/Overview";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const ProjectDetails = () => {
  return (
    <div>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Project Details </title>
      </Helmet>
      <PageTitle heading={"Project Details "} />
      {/* Components */}
      <Details />
      <Overview />
    </div>
  );
};

export default ProjectDetails;
