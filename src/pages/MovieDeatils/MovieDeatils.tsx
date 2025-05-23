import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import StarRating from "../movies/StartRating";
import Loader from "../SkeletonLoader/Loader";
import notReady from "../../assets/assets/not-ready.svg";


Modal.setAppElement("#root");

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  title: string;
  release_date: string;
  genres: Genre[];
  runtime: number;
  vote_average: number;
  vote_count: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

interface CrewMember {
  name: string;
  job: string;
}

interface Credits {
  crew: CrewMember[];
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface RouteParams {
  id: string;
}

const MovieDetails = () => {
  const { id } = useParams<RouteParams>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeVideoKey, setActiveVideoKey] = useState<string | null>(null);


  useEffect(() => {
    if (!id) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=db826f7a175bf94727529d5fd50d74f0`
    )
      .then((res) => res.json())
      .then((data: Movie) => setMovie(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=db826f7a175bf94727529d5fd50d74f0`
    )
      .then((res) => res.json())
      .then((data: Credits) => setCredits(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=db826f7a175bf94727529d5fd50d74f0`
    )
      .then((res) => res.json())
      .then((data: { results: Video[] }) => {
        const ytVideos = data.results.filter((v) => v.site === "YouTube");
        setVideos(ytVideos);
      });
  }, [id]);

  const openModal = (videoKey: string) => {
    setActiveVideoKey(videoKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveVideoKey(null);
  };

  if (!movie || !credits)
    return (
      <div>
        <Loader />
      </div>
    );

  const director = credits.crew.find((p) => p.job === "Director");
  const writer = credits.crew.find((p) => p.job === "Screenplay");

  return (
    <div
      className="relative bg-cover bg-center min-h-screen fixed text-white"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
        backgroundSize: "cover", // Ensures the image covers the area without stretching
        backgroundPosition: "center", // Keeps the image centered
        backgroundAttachment: "fixed", // Keeps the image fixed during scroll
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      <div className="relative z-10 flex flex-col p-6 gap-8">
        <div className="relative flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 relative">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : notReady
              }
              alt={movie.title}
              className="rounded shadow-lg w-[300px] md:w-[400px]"
            />
            {videos.length > 0 && (
              <button
                onClick={() => openModal(videos[0].key)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6l8 6-8 6V6z"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h1>
            <p className="text-gray-300 mb-2">
              {movie.release_date} •{" "}
              {movie.genres.map((g) => g.name).join(", ")} • {movie.runtime} min
            </p>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-yellow-400 font-semibold">
                <StarRating popularity={movie.popularity} />
              </p>
              <p className="text-yellow-400 font-semibold">
                {movie.vote_average.toFixed(1)} by {movie.vote_count} users
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-1">Overview</h2>
            <p className="mb-4">{movie.overview}</p>
            <div>
              {director && (
                <p>
                  <strong>{director.name}</strong>
                  <br />
                  <span className="text-gray-400">Director</span>
                </p>
              )}
              {writer && writer.name !== director?.name && (
                <p className="mt-2">
                  <strong>{writer.name}</strong>
                  <br />
                  <span className="text-gray-400">Screenplay</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {videos.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Videos</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="min-w-[250px] cursor-pointer"
                  onClick={() => openModal(video.key)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    alt={video.name}
                    className="rounded mb-2"
                  />
                  <p className="text-sm">{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {credits.cast && credits.cast.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cast</h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {credits.cast.slice(0, 16).map((actor) => (
                <div key={actor.id} className="w-[150px] text-center">
                  <Link to={`/person/${actor.id}`} key={actor.id} className="w-[150px] text-center">

                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : notReady
                    }
                    alt={actor.name}
                    className="w-full h-auto rounded-lg mb-2"
                  />
                  <p className="font-medium">{actor.name}</p>
                  <p className="text-sm text-gray-300">as {actor.character}</p>
              </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {credits.crew && credits.crew.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Crew</h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {credits.crew.map((crew) => (
                <div key={crew.id} className="w-[150px] text-center">
                  <img
                    src={
                      crew.profile_path
                        ? `https://image.tmdb.org/t/p/w185${crew.profile_path}`
                        : notReady
                      }
                    alt={crew.name}
                    className="w-full h-auto rounded-lg mb-2"
                  />
                  <p className="font-medium">{crew.name}</p>
                  <p className="text-sm text-gray-300">{crew.job}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Player"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
        overlayClassName="fixed inset-0 z-40"
      >
        <div className="w-full max-w-4xl aspect-video relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-xl z-50"
          >
            ✕
          </button>
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${activeVideoKey}?autoplay=1`}
            title="Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default MovieDetails;
