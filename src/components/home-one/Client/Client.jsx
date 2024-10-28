import Marquee from "react-fast-marquee";
import clientArrow from "../../../assets/home-one/icons/client-arrow.png";

// Clients data
const clients = [
  { id: 1, name: "Corporate", image: clientArrow },
  { id: 2, name: "Design", image: clientArrow },
  { id: 3, name: "Business", image: clientArrow },
];
const Client = () => {
  return (
    <section className="bg-homeOnePrimary">
      <Marquee>
        <div className="flex items-center overflow-hidden">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center gap-[50px]">
              {/* Client name */}
              <p className="font-bold text-[60px] md:text-[100px] lg:text-[150px] dark:text-[#10171E] uppercase ml-[50px]">
                {client.name}
              </p>
              {/* Client image */}
              <img
                src={client.image}
                alt={client.name}
                className="w-[50px] md:w-[80px] lg:w-[120px]"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Client;
