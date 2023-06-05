import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-3 z-10"
          onClick={handleClick}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
