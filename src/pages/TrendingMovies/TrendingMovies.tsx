import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../../Redux/features/fetchTrendingMovies";
import { AppDispatch } from "../../Redux/store/Store";
import { useEffect, useState } from "react";

type PopularTextProps = {
  setSelectedType: React.Dispatch<React.SetStateAction<"movie" | "tv">>;
  selectedType:"movie" | "tv"
};

const TrendingMovies = ({selectedType, setSelectedType}:PopularTextProps) => {
  const TrandingMovies = useSelector(selectTrendingMovies);


  return (
    <div>
      <div className="py-5 flex items-center">
        <div className="bg-blue-500 w-[4px] h-[40px] ml-2"></div>
        <h1 className="font-bold text-2xl ml-2">What's Popular</h1>
        <div className="flex mx-3 mt-1 space-x-2">
          {["movie", "tv"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as "movie" | "tv")}
              className={` px-2 py-1  ${
                selectedType === type ? "bg-white text-blue-600" : "text-white"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
