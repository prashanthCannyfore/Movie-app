import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store/Store";
import Loader from "../SkeletonLoader/Loader";
import notReady from "../../assets/assets/not-ready.svg";
import NotFound from "../NotFound/NotFound";

const SearchPage = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search).get("q") || "";

  const { results, status, error } = useSelector((state: RootState) => state.search);

  const handleMovieClick = (id: number) => {  
    navigate(`/movie/${id}`);
  };


  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-6">Search Results for "{query}"</h2>

      {status === "loading" && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      {results.length === 0 && status === "success" && !error && (
        <NotFound/> 
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {results.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer bg-gray-800 rounded hover:scale-105 transition-transform"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : notReady}
              alt={movie.title}
              className="rounded-t w-full"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
