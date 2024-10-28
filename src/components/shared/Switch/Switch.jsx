import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

const Switch = ({ borderColor, bgColor, moonFillColor, sunFillColor }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure we only attempt to render if mounted
  if (!mounted) return null;

  // Toggle theme based on the current state
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={` border rounded-full cursor-pointer ${borderColor}`}
      onClick={toggleTheme}
    >
      <div className="relative flex items-center p-1 md:p-2">
        <div
          className={`absolute w-[35px] md:w-[40px] h-[35px] md:h-[40px] rounded-full transition-transform duration-300 ease-in-out  ${
            theme === "dark"
              ? "translate-x-[42px]"
              : "-translate-x-[1px] md:-translate-x-[4px]"
          } ${bgColor}
        `}
        />
        <div className="flex gap-3">
          <div className="relative z-10 flex items-center justify-center p-1">
            <SunIcon fill={theme === "dark" ? moonFillColor : sunFillColor} />
          </div>
          <div className="relative z-10 flex items-center justify-center p-1">
            <MoonIcon fill={theme === "dark" ? sunFillColor : moonFillColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
