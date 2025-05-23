import sad_icon from "../../assets/assets/assets/sad-icon.png";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <img src={sad_icon} alt="Not Found" className="w-40 mb-6" />
      <h1 className="text-3xl font-semibold text-black mb-2">
        Sorry, I didn't found anything.
      </h1>
    </div>
  );
};

export default NotFound;
