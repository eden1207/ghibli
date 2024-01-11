/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

// Crée un store mock
const initialState = {
  isFormOpen: false,
  movies: data,
  favoriteMovies: [],
};
const mockStore = configureStore([]);
const store = mockStore(initialState);

test('renders without errors', () => {
  render(
    // Enveloppe votre composant avec le Provider en utilisant le store mock
    <Provider store={store}>
      <App />
    </Provider>
  );
});
