import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Button = ({
  buttonText,
  buttonBackgroundColor,
  slidingBgColor,
  buttonTextColor,
  borderColor,
  iconColor,
  borderRadius,
}) => {
  return (
    <button
      className={`border-1 font-semibold px-[22px] py-[12px] text-[17px] relative overflow-hidden group transition-all duration-500 ease-in-out flex items-center ${buttonBackgroundColor} ${borderRadius} ${borderColor} ${buttonTextColor}`}
    >
      {/* Sliding background */}
      <span
        className={`w-[101%] absolute inset-0 transition-transform duration-500 transform translate-x-full group-hover:translate-x-0 ease-out ${slidingBgColor}`}
      ></span>

      {/* Text */}
      <span className={`relative z-10  mr-2 ${buttonTextColor}`}>
        {buttonText}
      </span>

      {/* FontAwesome icon */}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`text-[16px] relative z-10 transition-colors duration-500 ${iconColor}`}
      />
    </button>
  );
};

export default Button;
