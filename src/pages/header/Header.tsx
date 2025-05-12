import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/assets/download.svg";
import git from "../../assets/assets/git-black.webp";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-color flex justify-between items-center  p-1.5">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[250px] h-[30px] sm:w-[500px] sm:h-[40px] cursor-pointer "
        />
      </div>

      <div className="flex justify-center  items-center space-x-4">
        <div>
        <a href="https://github.com/sakthi-cannyfore" target="#">

          <img
            src={git}
            alt="git"
            className="w-[30px] h-[30px]  mx-2 sm:w-[40px] sm:h-[40px] rounded-full"
          />
          </a>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            name=""
            id=""
            className="h-[25px] w-[100px] sm:w-[200px] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <AiOutlineSearch className="w-[25px] h-[25px] p-1 bg-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
