import React from "react";
import banner from "../../assets/assets/home-bannerr.png";

const Banner: React.FC = () => {
  return (
    <div className="relative  w- h-[300px] sm:h-[350px] md:h-[300px] overflow-hidden ">
      <div className="absolute text-white px-4 sm:px-8 md:px-12 w-full">
        <div className="relative top-[50px] sm:top-[60px] p-4 z-50">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white z-100">
            Welcome
          </h1>
          <h1 className="text-xl sm:text-2xl relative top-[15px] z-15">
            Millions of movies, TV shows, and people to discover. Explore now.
          </h1>
          <div className="mt-[30px] md:mt-[60px] flex flex-row sm:flex-row items-center space-y-2 sm:space-y-0 ">
            <input
              type="text"
              className="h-[35px]  sm:h-[40px] w-full sm:w-full px-2 py-1 focus:outline-none rounded-l-md text-black"
              placeholder="Search for a movie, TV show, Person..."
            />
            <div>
              <button className="relative top-[-4px] md:top-[.9px] bg-gradient-to-r from-teal-500 to-sky-400 h-[35px] sm:h-[45px] md:h-[41px] px-4 rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={banner}
        alt=""
        className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 via-transparent to-transparent opacity-70 z-10" />
    </div>
  );
};

export default Banner;
