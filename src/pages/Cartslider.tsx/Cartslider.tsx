import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "./Cartcss.css";
import "swiper/css";
import "swiper/css/navigation";
import loadingimage from "../../assets/assets/not-ready.svg";
import { image_base_url } from "../Utils";
import StarRating from "../movies/StartRating";
import { Link } from "react-router-dom";
// import StarRating from "../Star Rating/StartRating";
interface CartItem {
  id: number | undefined;
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
}

interface CartSliderProps {
  items: CartItem[];
  slidesPerView?: number;
}

const CartSlider = ({ items, slidesPerView = 5 }: CartSliderProps) => {
  return (
    <div className="w-full overflow-hidden sm:px-4   bg-black">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={slidesPerView}
        slidesPerGroup={5}
        loop={true}
        className="!overflow-visible"
        speed={700}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[200px] sm:w-[250px] sm:h-full bg-black rounded-b-xl  text-center">
              {!item.poster_path ? (
               <Link to={`/movie/${item.id}`}>
               <img
                 src={`${image_base_url}${item.poster_path}`}
                 alt={item.title}
                 className="w-full h-[330px] object-cover rounded-t-xl cursor-pointer"
               />
             </Link>
             
              ) : (
                <Link to={`/movie/${item.id}`}>
                <img
                  src={`${image_base_url}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-[330x] object-cover rounded-t-xl "
                />
                </Link>
              )}

              <div className="bg-gray-800 h-full rounded-b-xl">
                <div className="flex justify-center items-center gap-1 mt-2 mb-2 mx-2">
                  <p className="text-white text-sm mt-1 text-center"> 
                    <StarRating popularity={item.popularity} />
                    {item.popularity.toFixed(2)}
                  </p>
                </div>
                <p className="text-lg  text-white">{item.title}</p>

                <p className="text-white">
                  {new Date(item.release_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  );
};

export default CartSlider;
