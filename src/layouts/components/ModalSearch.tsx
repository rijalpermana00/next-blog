import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface SearchModalProps {
  searchModal: boolean;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ searchModal, setSearchModal }:SearchModalProps) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (searchModal) {
      const searchModalElement = document.getElementById("searchModal") as HTMLInputElement;
      searchModalElement.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          router.push({ pathname: "/search", query: { key: input } });
          setSearchModal(false);
        }
        if (e.key === "Escape") {
          setSearchModal(false);
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [searchModal, input, router, setSearchModal]);

  return (
    <div className={`search-modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full ${searchModal ? "open" : ""}`}>
      <button onClick={() => setSearchModal(false)} className="search-close">
        <IoCloseCircleOutline size={25} />
      </button>
      <input
        type="text"
        className="form-input outline-none outline-transparent focus:outline-none"
        id="searchModal"
        placeholder="Type and hit enter..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchModal;
