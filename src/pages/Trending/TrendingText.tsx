type PopularTextProps = {
  setSelectedType: React.Dispatch<React.SetStateAction<"day" | "week">>;
  selectedType: "day" | "week";
};
const TrendingText = ({ setSelectedType, selectedType }: PopularTextProps) => {
  return (
    <div className="bg-black py-5">
      <div className="py-5 flex items-center">
        <div className="bg-blue-500 w-[4px] h-[40px] ml-2"></div>
        <h1 className="font-bold text-2xl ml-2">Trending</h1>
        <div className="flex mx-3 mt-1 space-x-2">
          {["day", "week"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as "day" | "week")}
              className={` px-2 py-1 ${
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

export default TrendingText;
