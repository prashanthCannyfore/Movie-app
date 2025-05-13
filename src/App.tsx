import "./App.css";
import Banner from "./pages/banner/Banner";
import Header from './pages/header/Header'
import Movies from "./pages/movies/Movies";
function App() {
  return (
    <div className="">
      <div className=""> 
      <Header/>
      <Banner/>
      <Movies/>
      </div>

      {/* <div className="border  w-full  sm:w-[500px]  md:flex-1 sm:h-[500px] flex justify-center items-center bg-green-400">
        two
      </div>

      <div className="border w-[250px] h-[250px]  md:flex-2 justify-center items-center bg-yellow-300">
        three
      </div> */}
    </div>
  );
}

export default App;
