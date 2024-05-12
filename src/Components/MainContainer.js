import MainVideoInfo from "./MainVideoInfo";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.nowPlaying.nowPlaying);
  if (movies) {
    return (
      <div className="h-full">
        <MainVideoInfo
          title={movies[0].title}
          description={movies[0].overview}
        />
        <VideoBackground movieId={movies[0].id} />
      </div>
    );
  }
  return null;
};

export default MainContainer;
