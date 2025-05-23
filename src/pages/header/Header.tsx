import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/assets/download.svg";
import git from "../../assets/assets/git-black.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../Redux/features/searchSlice";
import { AppDispatch } from "../../Redux/store/Store";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSearch(query.trim()));
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="nav-color flex justify-between items-center p-1.5">
      <img src={logo} alt="logo" className="w-[250px] h-[30px] sm:w-[500px] sm:h-[50px]" />
      <div className="flex items-center space-x-4">
        <a href="https://github.com/sakthi-cannyfore" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="git" className="w-[40px] h-[40px] rounded-full" />
        </a>
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search movie"
            className="h-[25px] w-[200px] px-2 rounded-[2px]"
          />
          <AiOutlineSearch onClick={handleSearch} className="w-[25px] h-[25px] p-1 bg-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
