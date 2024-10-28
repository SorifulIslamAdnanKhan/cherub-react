import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import bannerImage from "../../../assets/home-one/images/hero/banner.png";
import heroTeamOne from "../../../assets/home-one/images/hero/hero-team-one.png";
import heroTeamThree from "../../../assets/home-one/images/hero/hero-team-three.png";
import heroTeamTwo from "../../../assets/home-one/images/hero/hero-team-two.png";
import heroImage from "../../../assets/home-one/images/hero/hero.png";
import Container from "../../shared/Container/Container";

const Banner = () => {
  return (
    <section className="bg-[#10171E]">
      {/* Banner content */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-[50px] md:gap-0 py-[60px]">
          <div className="md:col-span-2">
            {/* Hero text */}
            <span className="text-[40px] md:text-[60px] lg:text-[75px] xl:text-[95px] text-[#FFFFFF] uppercase leading-tight">
              Inspire <br />
              <span className="bg-homeOnePrimary text-[#10171E] ml-[20px] md:ml-[30px] rounded-full px-10">
                Strategy <br />
              </span>{" "}
              Impact
            </span>
          </div>
          {/* Hero image and conetnt */}
          <div>
            <img src={heroImage} alt="Hero image" />
            <div className="flex items-center mt-[40px] gap-[30px] lg:gap-[40px]">
              <div className="flex">
                <img
                  src={heroTeamOne}
                  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] -mr-2 xl:-mr-4"
                  alt="Team One"
                />
                <img
                  src={heroTeamTwo}
                  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] -mr-2 xl:-mr-4"
                  alt="Team Two"
                />
                <img
                  src={heroTeamThree}
                  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] -mr-2 xl:-mr-4"
                  alt="Team Three"
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className="bg-homeOnePrimary dark:text-[#10171E] w-[22px] h-[22px] lg:w-[32px] lg:h-[32px] rounded-full -mr-2 xl:-mr-4 p-1"
                />
              </div>
              {/* Hero team insight */}
              <div className="text-[#FFFFFF]">
                <h2 className="leading-none">3,000+</h2>
                <p>Experience Team</p>
              </div>
            </div>
            {/* Hero text */}
            <div className="text-[#FFFFFF] mt-[30px] w-full lg:max-w-[418px]">
              <p className="opacity-80 leading-tight">
                Business consulting is about problem-solving design Consultants
                work closely with was clients to identify areas of improvement
                within
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* Main Banner Image */}
      <div
        className="bg-cover bg-no-repeat h-[520px]"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      ></div>
    </section>
  );
};

export default Banner;
