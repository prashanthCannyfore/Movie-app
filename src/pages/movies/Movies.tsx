import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store/Store";
import { fetchMovies, selectMovies } from "../../Redux/features/movieSlice";
import { useEffect, useState } from "react";
import CartSlider from "../Cartslider.tsx/Cartslider";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import Loader from "../SkeletonLoader/Loader";



const Movies = () => {
  const { items, status } = useSelector(selectMovies);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedType, setSelectedType] = useState<"movie" | "tv">("movie");

  useEffect(() => {
    dispatch(fetchMovies(selectedType));
  }, [dispatch, selectedType]);

  return (
    <div className="bg-black text-white ">
      <TrendingMovies
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <div className="w-full overflow-hidden sm:px-4   bg-black">
        {status === "loading" ? <Loader /> : <CartSlider items={items} />}
      </div>
    </div>
  );
};

export default Movies;
