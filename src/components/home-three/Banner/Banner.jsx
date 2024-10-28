import banner from "../../../assets/home-three/images/banner/banner.png";
import Container from "../../shared/Container/Container";
import Button from "../../shared/Button/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  // Button text and styles
  const buttonText = "Hire Me";
  const buttonTextColor =
    "text-[#10171E] dark:text-[#FFFFFF] group-hover:text-[#FFFFFF]";
  const borderColor = "border-homeThreePrimary";
  const borderRadius = "none";
  const buttonBackgroundColor = "bg-transparent";
  const slidingBgColor = "bg-homeThreePrimary";
  const iconColor = "text-homeThreePrimary group-hover:text-[#FFFFFF]";

  return (
    <section className="mt-[50px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center">
          <div className="md:col-span-5 z-10 w-full md:w-[580px]">
            <h1 className="uppercase font-light leading-none">This is</h1>
            {/* Name */}
            <span className="text-[40px] md:text-[56px] lg:text-[75px] xl:text-[96px] font-extrabold uppercase mt-[60px] mb-[40px] dark:text-[#FFFFFF] z-50">
              Jhon Smith
            </span>
            {/* Description */}
            <p className="md:max-w-[280px] lg:max-w-[400px] xl:max-w-[500px] text-[#7F6666] dark:text-[#FFFFFF] dark:font-extralight">
              A personal portfolio showcases an individual's professional
              accomplishments, skills, and experiences. It typically includes
              samples of their work, such as projects, designs, writing samples,
              or code snippets
            </p>
            {/* CTA button */}
            <Link
              to="#"
              className="flex justify-start lg:justify-center items-center mt-[60px] mb-[60px] md:mb-0 font-bold"
            >
              <Button
                buttonText={buttonText}
                buttonTextColor={buttonTextColor}
                borderColor={borderColor}
                buttonBackgroundColor={buttonBackgroundColor}
                slidingBgColor={slidingBgColor}
                borderRadius={borderRadius}
                iconColor={iconColor}
              />
            </Link>
          </div>
          <div className="md:col-span-7 w-full">
            <img
              src={banner}
              alt="Jhon Smith"
              className="w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
