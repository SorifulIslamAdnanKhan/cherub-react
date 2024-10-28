import projectImg from "../../assets/home-one/images/project/project-details-image.png";
import projectDetailsOne from "../../assets/home-one/images/project/project-details-one.png";
import projectDetailsTwo from "../../assets/home-one/images/project/project-details-two.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Container from "../shared/Container/Container";

const Details = () => {
  return (
    <section>
      <Container>
        {/* Top container */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 justify-center items-center">
          {/* Project image */}
          <div className="md:col-span-9">
            <img src={projectImg} alt="project Image" />
          </div>
          {/* Project details */}
          <div className="md:col-span-3 w-full md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[300px] xl:w-[360px] xl:h-[370px] md:-ms-16 lg:-ms-20 bg-[#FFFFFF] dark:bg-[#1C2329] border-[#E7E7EB] shadow-md rounded-lg">
            <div className="bg-homeOnePrimary py-2 xl:py-3 text-center rounded-t-lg">
              <h3 className="text-[#10171E]">Project Details</h3>
            </div>
            <ul className="p-4 xl:p-6 space-y-1 lg:space-y-4 xl:space-y-5">
              <li className="flex justify-start items-center gap-7">
                <span className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  Name :
                </span>{" "}
                <span className="text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] text-[#7F6666] dark:text-[#FFFFFF]">
                  Networks
                </span>
              </li>
              <li className="flex justify-start items-center gap-5">
                <span className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  Author :
                </span>{" "}
                <span className="text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] text-[#7F6666] dark:text-[#FFFFFF]">
                  Alan Doe
                </span>
              </li>
              <li className="flex justify-start items-center gap-9">
                <span className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  Date :
                </span>{" "}
                <span className="text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] text-[#7F6666] dark:text-[#FFFFFF]">
                  23 December, 2023
                </span>
              </li>
              <li className="flex justify-start items-center gap-9">
                <span className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  Tags :
                </span>{" "}
                <span className="text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] text-[#7F6666] dark:text-[#FFFFFF]">
                  DataMasters
                </span>
              </li>
              <li className="flex justify-start items-center gap-7">
                <span className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  Value :
                </span>{" "}
                <span className="text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] text-[#7F6666] dark:text-[#FFFFFF]">
                  $ 240
                </span>
              </li>
              <li className="flex justify-start items-center gap-4">
                <span className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  Review :
                </span>{" "}
                <span className="text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] dark:text-[#FFFFFF] flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Text container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center my-[50px]">
          {/* One */}
          <div className="space-y-2">
            <h3>Customized Solutions</h3>
            <p className="max-w-[390px] text-[#7F6666] dark:text-[#FFFFFF]">
              Financial planners help people to knowledge in desig about how to
              invest and in save their moneye thewa most efficient way
            </p>
          </div>
          {/* Two */}
          <div className="space-y-2">
            <h3>Nexus Strategic</h3>
            <p className="max-w-[390px] text-[#7F6666] dark:text-[#FFFFFF]">
              Financial planners help people to knowledge in desig about how to
              invest and in save their moneye thewa most efficient way
            </p>
          </div>
          {/* Three */}
          <div className="space-y-2">
            <h3> Business Consultants</h3>
            <p className="max-w-[390px] text-[#7F6666] dark:text-[#FFFFFF]">
              Financial planners help people to knowledge in desig about how to
              invest and in save their moneye thewa most efficient way
            </p>
          </div>
        </div>
        <div className="my-[40px] md:my-[80px]">
          <div className="space-y-[30px]">
            <h2 className="leading-tight">
              Business Consulting Aims To Help Organizations Navigate
            </h2>
            <p className="w-full text-[#7F6666] dark:text-[#FFFFFF]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s wa, when an unknown printer took a galltype
              and scrambled it to make a type specimen book. It has survived not
              only five centuries tinto electronic typesetting remaining
              essentially unchanged Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galltype and scrambled it to make a type
              specimen book. It has survived.
            </p>
            <p className="w-full text-[#7F6666] dark:text-[#FFFFFF] font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galltype and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[30px] mt-[50px]">
            <img
              className="w-full"
              src={projectDetailsOne}
              alt="project details one"
            />
            <img
              className="w-full"
              src={projectDetailsTwo}
              alt="project details two"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Details;
