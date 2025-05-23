// import "./App.css";
// import Banner from "./pages/banner/Banner";
// import Header from "./pages/header/Header";
// import Movies from "./pages/movies/Movies";
// import TrandingToday from "./pages/TrandingToday/TrandingToday";
// function App() {
//   return (
//     <div className="">
//       <div className="">
//         <Header />
//         <Banner />
//         <Movies />
//         <TrandingToday />
//       </div>

//       {/* <div className="border  w-full  sm:w-[500px]  md:flex-1 sm:h-[500px] flex justify-center items-center bg-green-400">
//         two
//       </div>

//       <div className="border w-[250px] h-[250px]  md:flex-2 justify-center items-center bg-yellow-300">
//         three
//       </div> */}
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./pages/banner/Banner";
import Header from "./pages/header/Header";
import Movies from "./pages/movies/Movies";
import TrandingToday from "./pages/TrandingToday/TrandingToday";
import MovieDetails from "./pages/MovieDeatils/MovieDeatils"; // create this page
import SearchPage from "./pages/SearchPage/SearchPage";
import PersonDetails from "./pages/persons/PersonDetails";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
                <TrandingToday />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/person/:id" element={<PersonDetails />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
