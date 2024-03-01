const config = {
  apiKey: "15d2ea6d0dc1d476efbca3eba2b9bbfb",
  langIso: "es-ES",
  baseUrl: "https://api.themoviedb.org/3/",
};

export const movieListType = {
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
  upcoming: "upcoming",
};

export async function getMovieListData(movieListType, page = 1) {
  const movieListUrl = `${config.baseUrl}/movie/${movieListType}?language=${config.langIso}&api_key=${config.apiKey}&page=${page}`;
  const response = await fetch(movieListUrl);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error(getMovieListData): ${data.status_message} `);
  }
  return filterMoviesData(data?.results ?? []);
}

function filterMoviesData(movies){
  return movies.map( movie => {
    const { id, title , overview, poster_path, release_date, vote_average}= movie 
    return {
      id,
      title,
      description : overview,
      cover: poster_path,
      year: release_date.split("-").shift(),
      rating: vote_average,
    }

    
  })

}

