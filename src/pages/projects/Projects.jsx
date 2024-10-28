import { Helmet } from "react-helmet-async";
import AllProjects from "../../components/projects/AllProjects";
import FAQ from "../../components/shared/FAQ/FAQ";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const Projects = () => {
  return (
    <div>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Projects</title>
      </Helmet>
      <PageTitle heading={"Projects"} />
      {/* Components */}
      <AllProjects />
      <FAQ />
    </div>
  );
};

export default Projects;
