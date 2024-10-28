import Container from "../../shared/Container/Container";
import { Link } from "react-router-dom";
import ServiceOne from "../../icons/ServiceOne";
import ServiceTwo from "../../icons/ServiceTwo";
import ServiceThree from "../../icons/ServiceThree";
import ServiceFour from "../../icons/ServiceFour";
import ServiceFive from "../../icons/ServiceFive";
import ServiceSix from "../../icons/ServiceSix";
import ServiceSeven from "../../icons/ServiceSeven";
import ServiceEight from "../../icons/ServiceEight";
import ServiceNine from "../../icons/ServiceNine";

// All Services
const services = [
  { id: 1, name: "Where Imagination Meets Strategy", icon: ServiceOne },
  { id: 2, name: "Turning Ideas into Iconic Brands", icon: ServiceTwo },
  { id: 3, name: "Where Creativity Finds Its Voice", icon: ServiceThree },
  { id: 4, name: "Your Brand's Success Starts", icon: ServiceFour },
  { id: 5, name: "Transforming into Reality Concepts", icon: ServiceFive },
  { id: 6, name: "Crafting the Future of Branding", icon: ServiceSix },
  { id: 7, name: "Transformative Tactics Consulting", icon: ServiceSeven },
  { id: 8, name: "Ascendancy Advisory Services", icon: ServiceEight },
  { id: 9, name: "Paradigm Shift Consulting", icon: ServiceNine },
];

const AllServices = () => {
  return (
    <section className="max-w-[1920px] mx-auto">
      <Container>
        {/* Service Heading */}
        <div>
          <h1 className="leading-none">
            Best <span className="font-extralight">Service</span>
          </h1>
        </div>
        {/* Section Text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10"></div>
        {/* All Services */}
        <div className="my-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group col-span-1 border border-[#7f6666] dark:border-[#FFFFFF] dark:hover:border-homeOnePrimary rounded-[20px] transition duration-400 ease-in hover:bg-[#f0f5da] dark:hover:bg-[#1C2329] ${
                index === 0 || index === 5 || index === 6 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`max-w-[280px] lg:max-w-[360px] font-bold p-[20px] lg:p-[28px] ${
                  [1, 6, 7].includes(service.id) ? "text-left" : "text-center"
                }`}
              >
                <Link to="/service-details">
                  <h3>{service.name}</h3>
                </Link>
              </div>
              <div
                className={`flex ${
                  index === 0 || index === 5 || index === 6
                    ? "justify-end"
                    : "justify-center"
                } items-center p-[40px] xl:p-[80px]`}
              >
                <service.icon />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllServices;
