const Constants = {
  imgURL: {
    logo: "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
    bg: "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg",
    photo_url:
      "https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user",
    //https://avatars.githubusercontent.com/u/65698953?v=4
  },
  routes: {
    body: "/",
    browse: "/browse",
  },
  options: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
  },
  apiURL: {
    nowPlayingMovies:
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    movieVideos: "https://api.themoviedb.org/3/movie/{0}/videos",
    youtubeVideo:
      "https://www.youtube.com/embed/{0}?&autoplay=1&enablejsapi=1&controls=0&mute=1&loop=1&playlist={0}",
    posterImg: "https://image.tmdb.org/t/p/w342",
    popularMovies:
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    topRatedMovies:
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    upcomingMovies:
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    searchMovie: "https://api.themoviedb.org/3/search/movie?query={0}&page=1",
  },
  videoTypes: {
    trailer: "Trailer",
    teaser: "Teaser",
    featurette: "Featurette",
    clip: "Clip",
  },
  moviesType: {
    nowPlaying: "Trending",
    upcoming: "Upcoming",
    popular: "Popular",
    topRated: "Top Rated",
  },
  openai: {
    key: "",
  },
  huggingface: {
    key: process.env.REACT_APP_HUGGING_FACE_KEY,
  },
  query: {
    recommendMovies:
      "Act as a movie recommendation system. Recommend 5 movies for the query : {0}. Provide only comma separated movies name as per the example. Don't add extra text in response apart from movie name",
  },
};

export default Constants;
