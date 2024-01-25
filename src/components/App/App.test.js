import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { data } from '../../mockedData/data';
import App from './App';

// To add the scrollTo function of the ScrollToTop component in the test environment
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

// We mock the store
const mockStore = configureStore();
const initialState = {
    isFormOpen: false,
    movies: data,
    favoriteMovies: [],
    likedMovieIds: [],
    likedMoviesCount: 0,
};
const store = mockStore(initialState);

test('renders App component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  expect(getByTestId('app-component')).toBeTruthy();
});