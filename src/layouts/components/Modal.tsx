import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  setSearch: boolean;
}

const Search = ({ setSearch }:SearchProps) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const searchElement = document.getElementById("search") as HTMLInputElement;
    searchElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push({ pathname: "/search", query: { key: input } });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, router, setSearch]);

  return (
    <div className="relative flex w-full flex-wrap items-stretch border-1 rounded-lg border-gray-300 ring-0">
      <span className="z-10 h-full leading-snug font-normal text-center text-gray-300 dark:text-gray-700 absolute rounded-lg bg-white dark:bg-gray-700 text-base items-center justify-center w-8 pl-3 py-3">
          <FaSearch className="text-white"/>
      </span>
      <input 
        type="text" 
        id="search" 
        placeholder="Search here..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="px-3 py-3 placeholder-gray-600 dark:placeholder-gray-200 text-gray-900 dark:text-white relative bg-white dark:bg-gray-700 rounded-lg text-sm shadow outline-none focus:outline-none focus:ring focus:ring-gray-500 w-full pl-10"
      />        
    </div>
  );
};

export default Search;
