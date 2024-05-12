import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utilities/constants";

const VideoBackground = ({ movieId }) => {
  const [videoId, setVideoId] = useState(null);
  useEffect(() => {
    fetchTrailer();
  }, []);
  const fetchTrailer = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      API_OPTIONS
    );
    const data = await resp.json();
    const filterData = data.results.filter((movie) => movie.type === "Trailer");
    setVideoId(filterData?.[0].key);
  };
  if (videoId) {
    return (
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
      ></iframe>
    );
  }
  return null;
};

export default VideoBackground;
