import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{
          ...styles.scrollToTop,
          ...(isVisible ? styles.visible : {}),
        }}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};
const styles = {
  scrollToTop: {
    position: "fixed",
    bottom: "15px",
    right: "25px",
    backgroundColor: "#0e9ebc",
    color: "white",
    border: "none",
    padding: "20px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    zIndex: 100,
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  visible: {
    opacity: 1,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
};

export default Scroll;
