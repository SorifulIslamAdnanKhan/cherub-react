import { Link } from "react-router-dom";
import aboutImageOne from "../../../assets/home-one/images/about/about-image-one.png";
import Container from "../../shared/Container/Container";
import CurveText from "../../shared/CurveText/CurveText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const fillColor = "fill-[#10171E]";
  const fillDrakColor = "dark:fill-[#10171E]";
  return (
    <section className="bg-[#F0F5DA] py-[90px] lg:py-[120px] xl:py-[150px]">
      <Container>
        {/* Section text */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <p className="leading-none font-bold text-[#10171E]">About Us</p>
          <div className="flex-grow">
            <hr className="border-[#1c2329]" />
          </div>
        </div>
        <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[110px]">
          <div>
            {/* About headeing */}
            <h1 className="leading-none capitalize text-[#10171E]">
              Custom Solutions{" "}
              <span className="font-extralight">For Unique</span> Challenges
            </h1>
            {/* About Text */}
            <p className="max-w-[560px] text-[#7F6666] mt-[43px]">
              business consulting is about problem-solving. Consultants work
              closely with was clients to identify areas of improvement within
              thei designerr organization This could desi range from
              streamlining{" "}
            </p>
            <div className="relative flex justify-center xl:justify-end items-center mt-[100px]">
              {/* About CTA button */}
              <Link
                to="#"
                className="absolute md:right-[40%] lg:right-[30%] xl:right-[43%] lg:top-[50%] cursor-pointer"
              >
                <div className="relative flex justify-center items-center w-[150px] h-[150px] border border-[#1c2329] rounded-full p-[50px]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute left-[58px] text-[35px] text-homeOnePrimary rotate-[-32deg]"
                  />
                  <CurveText
                    fillColor={fillColor}
                    fillDrakColor={fillDrakColor}
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-4">
            <div>
              <img
                src={aboutImageOne}
                className="w-full h-[380px] object-cover rounded-2xl"
                alt="About Image One"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-[#10171E]">Business Consulting</h3>
              <p className="max-w-[520px] text-[#7F6666]">
                business consulting is about problem-solving. Consultants work
                wi closely with was clients to idebusiness consulting is about
                problem-solving. Consultants work wi closely with was clients to
                identify areas of improvement withinde thei designer
              </p>
              <p className="max-w-[520px] text-[#7F6666]">
                organization This could desi rangentify areas of improvement
                withinde thei designerr organization This could desi range
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
