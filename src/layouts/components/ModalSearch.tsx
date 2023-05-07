import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface SearchModalProps {
  setSearchModal: boolean;
}

const SearchModal = ({ setSearchModal }:SearchModalProps) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const searchModalElement = document.getElementById("searchModal") as HTMLInputElement;
    searchModalElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push({ pathname: "/search", query: { key: input } });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, router, setSearchModal]);

  return (
    // <div className={`search-modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full ${searchModal ? "open" : ""}`}>
    //   <button onClick={() => setSearchModal(false)} className="search-close">
    //     <IoCloseCircleOutline size={25} />
    //   </button>
    //   <input
    //     type="text"
    //     className="form-input outline-none outline-transparent focus:outline-none"
    //     id="searchModal"
    //     placeholder="Type and hit enter..."
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //   />
    // </div>
    <div className="relative flex w-full flex-wrap items-stretch">
      <span className="z-10 h-full leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <i className="fas fa-search"></i>
      </span>
      <input 
        type="text" 
        id="searchModal" 
        placeholder="Search here..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="border-3 px-3 py-3 placeholder-gray-600 text-gray-900 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
      />        
    </div>
  );
};

export default SearchModal;
