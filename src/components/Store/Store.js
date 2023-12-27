import { createStore } from "redux";

import { data } from '../../mockedData/data';

//state

const initialState = {
    isFormOpen: false,
    movies: data,
    favoriteMovies: [],
};

// actions creators

export const openForm = () => ({ type: "openForm" });

export const closeForm = () => ({ type: "closeForm" });

export const setMovies = (movies) => ({ 
  type: "setMovies",
  movies: movies, 
});

export const setFavoriteMovies = (favoriteMovies) => ({ 
  type: "setFavoriteMovies",
  favoriteMovies: favoriteMovies, 
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

  if (action.type === "setFavoriteMovies") {
    const setFavoriteMovies = action.setFavoriteMovies;
    return {
      ...state,
      setFavoriteMovies: setFavoriteMovies,
    };
  }

  return state;
}

export const store = createStore(reducer);