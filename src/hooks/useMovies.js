import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Constants from "../utils/Constants";
import { useSelector } from "react-redux";

const useMovies = (URL, action, getMovies) => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const fetchMovies = async () => {
    const response = await fetch(URL, Constants.options);
    const json = await response.json();
    dispatch(action(json.results));
  };

  useEffect(() => {
    !movies && fetchMovies();
  }, []);
};

export default useMovies;
