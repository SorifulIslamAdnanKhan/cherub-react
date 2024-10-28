import Container from "../../shared/Container/Container";
import portfolioOne from "../../../assets/home-three/images/portfolio/portfolio-one.png";
import portfolioTwo from "../../../assets/home-three/images/portfolio/portfolio-two.png";
import portfolioThree from "../../../assets/home-three/images/portfolio/portfolio-three.png";
import portfolioFour from "../../../assets/home-three/images/portfolio/portfolio-four.png";
import bgPortfolio from "../../../assets/home-three/background/portfolio-background.png";
import { motion } from "framer-motion";

// Portfolios data
const portfolios = [
  {
    id: 1,
    image: portfolioOne,
    title: "Change Management",
    description:
      "Businesses improve their performance efficiency, and overall success.",
  },
  {
    id: 2,
    image: portfolioTwo,
    title: "Digital Transformation",
    description: "Transforming business operations through technology.",
  },
  {
    id: 3,
    image: portfolioThree,
    title: "Project Management",
    description: "Effective planning and execution of projects.",
  },
  {
    id: 4,
    image: portfolioFour,
    title: "Brand Development",
    description: "Building and enhancing brand identity.",
  },
];

const Portfolio = () => {
  //Animations
  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-[90px] lg:mt-[120px] xl:mt-[150px]"
    >
      <Container>
        <div className="flex justify-center items-center mb-[80px]">
          <p className="font-bold text-[50px] md:text-[60px] lg:text-[80px] xl:text-[120px] capitalize leading-none">
            My <span className="font-extralight">Portfolio</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {portfolios.map((portfolio, index) => (
            <div key={index} className="group relative">
              <img src={portfolio.image} alt={portfolio.title} />
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${bgPortfolio})`,
                  backgroundSize: "650px",
                }}
              >
                <div className="absolute bottom-[20px] md:bottom-[35px] left-[15px] md:left-[25px] text-[#FFFFFF] transition-opacity duration-500 ease-in-out">
                  <h3 className="leading-none">{portfolio.title}</h3>
                  <p className="max-w-[500px] mt-[12px]">
                    {portfolio.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Portfolio;
