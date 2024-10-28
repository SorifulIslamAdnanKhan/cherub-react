import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import recentImgOne from "../../../assets/images/blog/recent-one.png";
import recentImgTwo from "../../../assets/images/blog/recent-two.png";

const Sidebar = ({ handleSearchQueryChange }) => {
  return (
    <section className="mx-[10px] md:mx-[20px] xl:mx-[30px] space-y-8">
      {/* Search */}
      <div className="space-y-4 px-4 md:px-6 py-7 border rounded-xl">
        <h3>Search</h3>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full border border-r-0 dark:placeholder-white focus:outline-none rounded-s-full px-3 md:px-5 py-[10px] h-[42px] box-border"
            name="search"
            onChange={handleSearchQueryChange}
            placeholder="Enter Search"
          />
          <button className="bg-homeOnePrimary px-3 md:px-5 h-[42px] box-border rounded-e-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#10171E]"
            />
          </button>
        </div>
      </div>
      {/* Blog category */}
      <div className="px-4 md:px-6 py-2 border rounded-xl">
        <ul className="my-4 space-y-4">
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="text-homeOnePrimary"
            />
            <p className="font-medium text-[#7F6666] dark:text-[#FFFFFF]">
              Portfolio Generated
            </p>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="text-homeOnePrimary"
            />
            <p className="font-medium text-[#7F6666] dark:text-[#FFFFFF]">
              Featured(6)
            </p>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="text-homeOnePrimary"
            />
            <p className="font-medium text-[#7F6666] dark:text-[#FFFFFF]">
              Business(8)
            </p>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="text-homeOnePrimary"
            />
            <p className="font-medium text-[#7F6666] dark:text-[#FFFFFF]">
              Corporate(3)
            </p>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="text-homeOnePrimary"
            />
            <p className="font-medium text-[#7F6666] dark:text-[#FFFFFF]">
              Mordern(8)
            </p>
          </li>
        </ul>
      </div>
      {/* Recent news */}
      <div className="px-4 md:px-6 py-2 border rounded-xl">
        <ul className="my-4 space-y-5">
          <h3>Recent News</h3>
          <li className="flex flex-row items-start md:items-center gap-4">
            <img
              className="w-[80px]"
              src={recentImgOne}
              alt="Recent News Image"
            />
            <div>
              <p className="text-xs md:text-sm">Dec 12,2023</p>
              <h4 className="font-extrabold text-[14px] md:text-[16px]">
                Designing My Story One Project at a Time
              </h4>
            </div>
          </li>
          <li className="flex flex-row items-start md:items-center gap-4">
            <img
              className="w-[80px]"
              src={recentImgTwo}
              alt="Recent News Image"
            />
            <div>
              <p className="text-xs md:text-sm">Dec 12,2023</p>
              <h4 className="font-extrabold text-[14px] md:text-[16px]">
                Innovate Create Elevate Design Odyssey
              </h4>
            </div>
          </li>
        </ul>
      </div>
      {/* Tags */}
      <div className="px-4 md:px-6 py-5 border rounded-xl space-y-4">
        <h3>Tags</h3>
        <ul className="flex flex-col md:flex-row flex-wrap gap-[10px]">
          <li className="text-sm bg-[#F0F5DA] dark:bg-[#1C2329] p-[8px] rounded-md">
            All Project
          </li>
          <li className="text-sm bg-[#F0F5DA] dark:bg-[#1C2329] p-[8px] rounded-md">
            Automac
          </li>
          <li className="text-sm bg-[#F0F5DA] dark:bg-[#1C2329] p-[8px] rounded-md">
            AI Tech
          </li>
          <li className="text-sm bg-[#F0F5DA] dark:bg-[#1C2329] p-[8px] rounded-md">
            AI
          </li>
          <li className="text-sm bg-[#F0F5DA] dark:bg-[#1C2329] p-[8px] rounded-md">
            Mobile Tech
          </li>
          <li className="text-sm bg-[#F0F5DA] dark:bg-[#1C2329] p-[8px] rounded-md">
            Technology
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
