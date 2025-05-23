import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../../Redux/features/fetchTrendingMovies";
import { AppDispatch } from "../../Redux/store/Store";
import { useEffect, useState } from "react";
import TrendingText from "../Trending/TrendingText";
import CartSlider from "../Cartslider.tsx/Cartslider";

const TrandingToday = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedType, setSelectedType] = useState<"day" | "week">("day");
  const { trendingMovie } = useSelector(selectTrendingMovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies(selectedType));
  }, [dispatch, selectedType]);

  return ( 
    <div className="bg-black text-white pb-10"> 
      <TrendingText
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      
      <div className="w-full overflow-hidden sm:px-4   bg-black">
        <CartSlider items={trendingMovie} />
      </div>
    </div>
  );
};

export default TrandingToday;
