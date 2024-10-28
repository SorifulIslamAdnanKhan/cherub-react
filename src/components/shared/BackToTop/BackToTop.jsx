import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  let location = useLocation();

  useEffect(() => {
    // Show button when the user scrolls down 300 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-2 z-[1000] animate-bounce">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`px-[14px] py-3 rounded-2xl ${
            location.pathname == "/home-two"
              ? "bg-black text-homeTwoPrimary dark:bg-[#1C2329]"
              : location.pathname == "/home-three"
              ? "bg-black text-homeThreePrimary dark:bg-[#1C2329]"
              : "bg-black text-homeOnePrimary dark:bg-[#1C2329]"
          } shadow-lg`}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
