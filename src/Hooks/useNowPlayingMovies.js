import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlaying } from "../Reducers/nowPlayingSlice";
import { API_OPTIONS } from "../Utilities/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addNowPlaying(jsonData.results));
  };
};

export default useNowPlayingMovies;
