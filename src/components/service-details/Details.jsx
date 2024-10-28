import ServiceOne from "../icons/ServiceOne";
import ServiceTwo from "../icons/ServiceTwo";
import overviewImgOne from "../../assets/home-one/images/service/sevice-overview-one.png";
import overviewImgTwo from "../../assets/home-one/images/service/sevice-overview-two.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <section className="me-5">
      {/* Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {/* Service one */}
        <div className="group flex flex-col justify-center items-center border border-[#7f6666] dark:border-[#FFFFFF] dark:hover:border-homeOnePrimary rounded-[20px] transition duration-400 ease-in hover:bg-[#f0f5da] dark:hover:bg-[#1C2329]">
          <div className="service-title pt-5 xl:p-[28px] text-center">
            <h3>Turning Ideas into Iconic Brands</h3>
          </div>
          <div className="p-[40px] xl:p-[80px]">
            <ServiceOne />
          </div>
        </div>
        {/* Service Two */}
        <div className="group flex flex-col justify-center items-center border border-[#7f6666] dark:border-[#FFFFFF] rounded-[20px] dark:hover:border-homeOnePrimary transition duration-400 ease-in hover:bg-[#f0f5da] dark:hover:bg-[#1C2329]">
          <div className="service-title pt-5 xl:p-[28px] text-center">
            <h3>Where Creativity Finds Its Voice</h3>
          </div>
          <div className="p-[40px] xl:p-[80px]">
            <ServiceTwo />
          </div>
        </div>
      </div>
      {/* Service overview container */}
      <div className="mt-[30px] mb-[50px] space-y-[30px]">
        <h2>Service Overview</h2>
        <p className="text-[#7F6666] dark:text-[#FFFFFF]">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra. Aliquam eros justo, posuere lobortis non, viverra laoreet
          augue mattis start fermentum ullamcor viverra laoreet By Admin.
          Creativity 28th February 2022. Leave a comment viverra laoreet augue
          mattis start fermentum
        </p>
        <p className="text-[#7F6666] dark:text-[#FFFFFF]">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra. Aliquam eros justo, posuere lobortis non, viverra laoreet
          augue mattis start fermentum ullamcor
        </p>
        <p className="font-bold text-lg">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra. Aliquam eros justo, posuere lobortis non, viverra laoreet{" "}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px]">
          <img
            className="w-full md:w-[340px] lg:w-[290px] xl:w-[390px]"
            src={overviewImgOne}
            alt="Overview Image One"
          />
          <img
            className="h-full md:w-[340px] lg:w-[290px] xl:w-[390px]"
            src={overviewImgTwo}
            alt="Overview Image Two"
          />
        </div>
        <p className="text-[#7F6666] dark:text-[#FFFFFF]">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra. Aliquam eros justo, posuere lobortis non, viverra laoreet
          augue mattis start fermentum ullamcor viverra laoreet By Admin.
          Creativity. 28th February 2022. Leave a comment viverra laoreet augue
          mattis start fermentum start fermentum{" "}
        </p>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 my-4 gap-3 md:gap-5">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
              />
              <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                Keystone Advisory Solutions
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
              />
              <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                Momentum Management Consulting
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
              />
              <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                Navigate Business Advisors
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] rounded-full p-1 bg-homeOnePrimary text-[#FFFFFF]"
              />
              <p className="font-normal text-[#7F6666] dark:text-[#FFFFFF]">
                PathFinder Business Consulting
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
      {/* Strategic Partners for Success */}
      <div className="space-y-[30px] w-full">
        <h2 className="leading-tight">Strategic Partners for Success</h2>
        <p className="text-[#7F6666] dark:text-[#FFFFFF]">
          Business consultants provide expert advice and guidance to businesses
          to help them improve their performance, solve problems, and achieve
          their goals. They may work on various aspects such as strategy,
          operations, marketing, finance, or organizational structure.Companies
          may consider hiring a business consultant when they encounter
          challenges they are unable to address internally, when they need
          specialized expertise for a particular project or initiative, or when
          they want an objective perspective on their business operations.
        </p>
      </div>
    </section>
  );
};

export default Details;
