import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Constants from "../utils/Constants";

const useMovies = (URL, action) => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(URL, Constants.options);
    const json = await response.json();
    dispatch(action(json.results));
  };

  useEffect(() => fetchMovies, []);
};

export default useMovies;
