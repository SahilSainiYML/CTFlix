const MainVideoInfo = ({ title, description }) => {
  return (
    <div className="absolute text-white pt-[20%] px-24">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="w-1/3">{description}</h2>
      <div>
        <button className="bg-slate-600 p-4 m-2 rounded-lg text-white">
          ▶️ Play
        </button>
        <button className="bg-slate-400 opacity-50 p-4 m-2 rounded-lg text-white">
          More info
        </button>
      </div>
    </div>
  );
};

export default MainVideoInfo;
