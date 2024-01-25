import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { data } from '../../mockedData/data';
import Header from './Header';
import App from '../App/App';

// To add the scrollTo function of the ScrollToTop component in the test environment
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

// Mock des données de film
const mockMovie = {
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "original_title": "天空の城ラピュタ",
  "original_title_romanised": "Tenkū no shiro Rapyuta",
  "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
  "movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "release_date": "1986",
  "running_time": "124",
  "rt_score": "95",
  "people": [
    "https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
    "https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786",
    "https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
    "https://ghibliapi.herokuapp.com/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
    "https://ghibliapi.herokuapp.com/people/e08880d0-6938-44f3-b179-81947e7873fc",
    "https://ghibliapi.herokuapp.com/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"
  ],
  "species": [
    "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
  ],
  "locations": ["https://ghibliapi.herokuapp.com/locations/"],
  "vehicles": [
    "https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
  ],
  "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
};

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

let getByTestId, getByText, getByAltText;

describe("When I am connected to the home page", () => {
  beforeEach(() => {
    const renderResult = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    getByTestId = renderResult.getByTestId;
    getByText = renderResult.getByText;
    getByAltText = renderResult.getByAltText;
  });
  test("Then It should render the header component", () => {
    expect(getByTestId('header-component')).toBeTruthy();
  });
  test("Then It should display the Ghibli logo", () => {
    expect(getByAltText('ghibli')).toBeTruthy();
  });
  test("Then It should display the three links", () => {
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
    expect(getByText('Favorite')).toBeTruthy();
  });
});

describe("When I am connected to the home page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  })
  describe("When I click on the home page link", () => {
    test("Then I should send to the home page", () => {
      fireEvent.click(screen.getByText('Home'));
      expect(screen.getByTestId('banner-component')).toBeTruthy();
      expect(screen.getByText('Titles')).toBeTruthy();
      expect(screen.getByText('Directors')).toBeTruthy();
      expect(screen.getByText('Producers')).toBeTruthy();
    });
  });
  describe("When I click on the about page link", () => {
    test("Then I should be sent to the About page", () => {
      fireEvent.click(screen.getByText('About'));
      expect(screen.getByTestId('about-component')).toBeTruthy();
    });
  });
  describe("When I click on the favorite page link", () => {
    test("Then I should be sent to the favorite page", () => {
      fireEvent.click(screen.getByText('Favorite'));
      expect(screen.getByTestId('favorite-component')).toBeTruthy();
    });
  });
});