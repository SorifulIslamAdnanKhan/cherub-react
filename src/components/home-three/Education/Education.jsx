// Education data
const educationData = [
  {
    id: 1,
    period: "2013-2015",
    degree: "Diploma in Design",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    id: 2,
    period: "2015-2019",
    degree: "Bachelor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    id: 3,
    period: "2019-2021",
    degree: "Masters",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
];

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px] lg:gap-[80px] mt-[80px] md:mt-[120px]">
      {educationData.map((education, index) => (
        <div
          key={index}
          className={`text-white ${
            index < 2
              ? "border-b-1 pb-[20px] md:pb-0 md:border-b-0 md:border-r-1 border-homeThreePrimary pr-0 md:pr-[40px] lg:pr-[80px]"
              : ""
          }`}
        >
          <ul className="list-disc pl-[15px] opacity-75">
            <li className="text-[12px] lg:text-[16px]">{education.period}</li>
          </ul>
          <h3 className="my-[15px] leading-none">{education.degree}</h3>
          <p className="w-full md:max-w-[320px] opacity-75">
            {education.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
