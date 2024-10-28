import { Link } from "react-router-dom";
import ProjectEight from "../../assets/home-one/images/project/project-eight.png";
import ProjectFive from "../../assets/home-one/images/project/project-five.png";
import ProjectFour from "../../assets/home-one/images/project/project-four.png";
import ProjectOne from "../../assets/home-one/images/project/project-one.png";
import ProjectSeven from "../../assets/home-one/images/project/project-seven.png";
import ProjectSix from "../../assets/home-one/images/project/project-six.png";
import ProjectThree from "../../assets/home-one/images/project/project-three.png";
import ProjectTwo from "../../assets/home-one/images/project/project-two.png";
import Container from "../shared/Container/Container";

// All projects data
const allProjects = [
  {
    id: 1,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectOne,
  },
  {
    id: 2,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectTwo,
  },
  {
    id: 3,
    title: "More Details",
    description:
      "Business consulting is about problem-solving. Consultants work closely with clients to identify areas of improvement within their organization.",
  },
  {
    id: 4,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectThree,
  },
  {
    id: 5,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectFour,
  },
  {
    id: 6,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectFive,
  },
  {
    id: 7,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectSix,
  },
  {
    id: 8,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectSeven,
  },
  {
    id: 9,
    title: "Momentum Advisory",
    description: "Consulting is about problem was designer solving.",
    image: ProjectEight,
  },
];
const AllProjects = () => {
  return (
    <section className="max-w-[1920px] mx-auto">
      <Container>
        {/* Section text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="font-bold text-sm sm:text-base md:text-lg leading-none">
            Gallery
          </p>
        </div>
        <div>
          {/* Project heading */}
          <div className="mt-[30px] mb-[10px]">
            <span className="font-bold text-[80px] lg:text-[100px] leading-none">
              Work
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {allProjects.map((project, index) => (
              <div key={project.id} className="relative group">
                {/* Conditional rendering for different work items */}
                {project.image ? (
                  /* Render work item with image (for items 1, 2, 5, and 6) */
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full"
                  />
                ) : index === 2 ? (
                  /* Special case for the third item (custom text description) */
                  <div className="flex flex-col justify-items-end h-full">
                    <div className="h-full lg:h-auto flex flex-row justify-center items-center lg:justify-end mb-[30px] md:mb-0 ">
                      <p className="max-w-[300px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
                        {project.description}
                      </p>
                    </div>
                    <Link
                      to="#"
                      className="h-full flex justify-center items-center"
                    >
                      <div className="w-[190px] h-[190px] flex justify-center items-center bg-[#F0F5DA] dark:bg-[#1C2329] dark:border dark:border-homeOnePrimary rounded-full">
                        <p className="max-w-[75px] uppercase">
                          {project.title}
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {/* Default structure for works with image (if title and description exist) */}
                {project.image && (
                  <div className="w-[90%] left-1/2 -translate-x-1/2 mx-auto opacity-0 invisible absolute bottom-[20px] group-hover:opacity-100 group-hover:visible bg-[#F0F5DA] p-[10px] rounded-2xl transition-opacity duration-400 ease-in">
                    <Link
                      href="#"
                      className="flex flex-col justify-center items-center cursor-pointer"
                    >
                      <h3 className="font-bold md:text-[20px] text-[#10171E]">
                        {project.title}
                      </h3>
                      <p className="max-w-[300px] text-[#7F6666] text-center mt-[10px]">
                        {project.description}
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllProjects;
