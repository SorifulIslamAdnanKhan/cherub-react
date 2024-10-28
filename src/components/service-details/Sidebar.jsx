import { useState } from "react";
import RightArrowDouble from "../icons/RightArrowDouble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

// All services data
const serviceLists = [
  { id: 1, name: "Peak Performance Partners" },
  { id: 2, name: "Optima Business Advisors" },
  { id: 3, name: "Empowerment Consulting Group" },
  { id: 4, name: "Clarity Consulting Services" },
  { id: 5, name: "Horizon Business Insights" },
  { id: 6, name: "Fusion Growth Advisors" },
];

const Sidebar = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleServiceClick = (id) => {
    setSelectedService(id);
  };
  return (
    <section className="">
      {/* Service list container */}
      <div>
        <h2>Service List</h2>
        <div>
          <ul className="my-4 space-y-2">
            {serviceLists.map((service) => (
              <li
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`flex justify-between items-center py-2 md:py-3 px-3 md:px-4 rounded-xl font-bold cursor-pointer hover:bg-homeOnePrimary ${
                  selectedService === service.id
                    ? "bg-homeOnePrimary text-[#10171E]"
                    : "bg-[#F0F5DA] dark:bg-[#1C2329] duration-250"
                }`}
              >
                <span>{service.name}</span>
                <RightArrowDouble selected={selectedService === service.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Get in touch container*/}
      <div className="my-[30px] bg-[#F0F5DA] dark:bg-[#1C2329] p-[20px] rounded-lg">
        <h2>Get in Touch</h2>
        <div>
          <ul className="my-4 space-y-2">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-homeOnePrimary" />
              <p className="text-[#7F6666] dark:text-[#FFFFFF]">
                (303) 555-0105
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-homeOnePrimary"
              />
              <p className="text-[#7F6666] dark:text-[#FFFFFF]">
                bill.sanders@example.com
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faClock} className="text-homeOnePrimary" />
              <p className="text-[#7F6666] dark:text-[#FFFFFF]">
                Mon-Sun : 8AM - 5PM
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
