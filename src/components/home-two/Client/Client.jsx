import Container from "../../shared/Container/Container";
import ClientOne from "../../icons/ClientOne";
import ClientTwo from "../../icons/ClientTwo";
import ClientThree from "../../icons/ClientThree";
import ClientFour from "../../icons/ClientFour";
import ClientFive from "../../icons/ClientFive";

// Clients data
const clients = [
  {
    id: 1,
    icon: ClientOne,
  },
  {
    id: 2,
    icon: ClientTwo,
  },
  {
    id: 3,
    icon: ClientThree,
  },
  {
    id: 4,
    icon: ClientFour,
  },
  {
    id: 5,
    icon: ClientFive,
  },
];

const Client = () => {
  return (
    <section className="mt-[90px] lg:mt-[120px] xl:mt-[150px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-0">
          {clients?.map((client, index) => (
            <client.icon key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Client;
