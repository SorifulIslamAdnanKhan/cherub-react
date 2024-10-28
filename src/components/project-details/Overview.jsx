import Container from "../shared/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  return (
    <section>
      <Container>
        {/* Main grid layout for Project Overview section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px] mb-[60px]">
          {/* Left Column: Project Overview heading with horizontal line */}
          <div>
            <div className="flex items-center gap-2 lg:gap-4">
              <h3 className="font-bold mr-2">Project Overview</h3>
              <div className="flex-grow">
                {/* Horizontal line under the Project Overview heading */}
                <hr className="bg-[#10171E] dark:bg-[#FFFFFF]" />
              </div>
            </div>
          </div>

          {/* Right Column: Description and Key Points */}
          <div>
            {/* Project overview description text */}
            <p className="text-[#7F6666] dark:text-[#FFFFFF]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galltype and
              scrambled it to make a type specimen book. It has survived not
              only five centuries tinto electronic typesetting remaining
              essentially unchanged
            </p>

            {/* Key points list */}
            <div>
              <ul className="grid grid-cols-1 gap-3 md:gap-5 mt-[40px]">
                {/* Each list item represents a key point with an icon */}
                <li className="flex items-center gap-4">
                  {/* Checkmark icon */}
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
                  />
                  {/* Text for the key point */}
                  <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                    PathFinder Business Consulting{" "}
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
                  />
                  <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                    Pinnacle Performance Consulting{" "}
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
                  />
                  <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                    Progress Partners Consulting{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional content*/}
        <div className="space-y-8 mb-[150px]">
          {/* Section heading */}
          <h2 className="leading-tight">Priority Partners Consulting</h2>

          {/* Paragraphs with detailed information about consulting services */}
          <p className="text-[#7F6666] dark:text-[#FFFFFF]">
            Business consultants provide expert advice and guidance to
            businesses to help them improve their performance, solve problems,
            and achieve their goals. They may work on various aspects such as
            strategy, operations, marketing, finance, or organizational
            structure. Companies may consider hiring a business consultant when
            they encounter challenges they are unable to address internally,
            when they need specialized expertise for a particular project or
            initiative, or when they want an objective perspective on their
            business operations.
          </p>

          <p className="text-[#7F6666] dark:text-[#FFFFFF]">
            Business consultants provide expert advice and guidance to
            businesses to help them improve their performance, solve problems,
            and achieve their goals. They may work on various aspects such as
            strategy, operations, marketing, finance, or organizational
            structure. Companies may consider hiring a business consultant when
            they encounter challenges they are unable to address internally,
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Overview;
