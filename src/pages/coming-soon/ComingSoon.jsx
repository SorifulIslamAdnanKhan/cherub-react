import stayTuned from "../../assets/images/coming-soon/stay-tuned.png";
import Container from "../../components/shared/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ComingSoonPage = () => {
  //Time
  const timeData = [
    { id: 1, unit: "Days", time: 10 },
    { id: 2, unit: "Hours", time: 10 },
    { id: 3, unit: "Minutes", time: 10 },
    { id: 4, unit: "Seconds", time: 10 },
  ];

  return (
    <section className="mt-[60px]">
      <Container>
        {/* Coming soon text section */}
        <div className="flex flex-col items-center justify-center">
          <div className="ms-12 md:ms-24 w-[170px] md:w-[250px] bg-[#10171E] transform -skew-x-[20deg]">
            <p className="uppercase text-sm md:text-xl font-bold text-white text-center">
              Under Construction
            </p>
          </div>

          <p className="text-6xl md:text-8xl font-bold uppercase italic -tracking-[4px]">
            Coming
          </p>
          <div className="flex gap-3">
            <p className="text-6xl md:text-8xl font-bold uppercase italic -tracking-[4px]">
              Soon
            </p>
            <div className="relative">
              <img
                className="w-20 md:w-28 h-20 md:h-28"
                src={stayTuned}
                alt="Stay Tuned"
              />
              <div className="absolute top-5 left-5 flex flex-col items-center justify-end dark:text-black">
                <p className="uppercase italic text-sm md:text-2xl font-bold">
                  Stay
                </p>
                <p className="uppercase italic text-sm md:text-2xl font-bold">
                  Tuned
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Coming soon times section */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mt-[60px]">
          {timeData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center border rounded-xl w-32 md:w-28 h-20"
            >
              <h2>{item.time}</h2>
              <p>{item.unit}</p>
            </div>
          ))}
        </div>
        {/* Coming soon subscribe section*/}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-gradient-to-r from-[#151E26] via-[#2E4357] to-[#43607D] my-[60px] py-14 rounded-2xl">
          <input
            type="email"
            name="email"
            className="px-3 md:px-5 py-3 focus:outline-none border bg-gradient-to-r from-[#293B4D] to-[#2D4154] dark:to-[#3E5975] rounded-full"
            id="email"
            placeholder="Your email..."
          />
          <button className="flex items-center justify-center w-[220px] md:w-[140px]  gap-2 px-3 md:px-5 py-3 rounded-full bg-homeOnePrimary dark:text-black">
            <span className="font-semibold">Subscribe</span>{" "}
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ComingSoonPage;
