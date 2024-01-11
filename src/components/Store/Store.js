import { createStore } from "redux";

import { data } from '../../mockedData/data';

//state

const initialState = {
    isFormOpen: false,
    movies: data,
    favoriteMovies: [],
    likedMovieIds: [],
    likedMoviesCount: 0,
};

// actions creators

export const openForm = () => ({ type: "openForm" });

export const closeForm = () => ({ type: "closeForm" });

/** 
 * Provides the movies or the filtered movies after research with the search bar and tags 
 */
export const setMovies = (movies) => ({ 
  type: "setMovies",
  movies: movies, 
});

/**
 * Provides the favorite movies when the user clicks on the like button
 */
export const setFavoriteMovies = (favoriteMovies) => ({ 
  type: "setFavoriteMovies",
  favoriteMovies: favoriteMovies, 
});

/**
 * Deletes a favorite movie from the list on the favorite page
 */
export const removeFromFavorites = (movieId) => ({
  type: "removeFromFavorites",
  movieId: movieId,
});

function reducer(state = initialState, action) {
  if (action.type === "openForm") {
    return {
      ...state,
      isFormOpen: true,
    };
  }

  if (action.type === "closeForm") {
    return {
      ...state,
      isFormOpen: false,
    };
  }

  if (action.type === "setMovies") {
    const movies = action.movies;
    return {
      ...state,
      movies: movies,
    };
  }

  /**
   * When the user clicks on the like button of a movie, it takes the movie informations,
   * the number of liked movies (to display on the header) and the list of liked movies id.
   * The last one is usefull when the user clicks on the trash button of the favorite list, to identify
   * the movies to keep on the list
   */
  if (action.type === "setFavoriteMovies") {
    const favoriteMovies = action.favoriteMovies;
    const likedMovieIds = favoriteMovies.map((movie) => movie.id);
    const likedMoviesCount = favoriteMovies.length;
    return {
      ...state,
      favoriteMovies: favoriteMovies,
      likedMovieIds: likedMovieIds,
      likedMoviesCount: likedMoviesCount,
    };
  }

  /**
   * When the user clicks on the trash button of the favorite list, it identifies
   * the movies to keep on the list and substracts 1 from the liked movies count on the header
   */
  if (action.type === "removeFromFavorites") {
    const movieIdToRemove = action.movieId;
    const updatedFavoriteMovies = state.favoriteMovies.filter((movie) => movie.id !== movieIdToRemove);
    return {
      ...state,
      favoriteMovies: updatedFavoriteMovies,
      likedMoviesCount: state.likedMoviesCount - 1, 
    };
  }

  return state;
}

export const store = createStore(reducer);