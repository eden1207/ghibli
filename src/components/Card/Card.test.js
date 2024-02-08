import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { data } from '../../mockedData/data';
import Card from './Card';

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

/** Function to give the number of colored stars as function of the movie rating */
function giveRating(rate) {
    if(0<=rate && rate<19) {
        return 1
    } else if (20<=rate && rate<39) {
        return 2
    } else if (40<=rate && rate<59) {
        return 3
    } else if (60<=rate && rate<79) {
        return 4
    } else if (80<=rate && rate<=100) {
        return 5
    } else {
        console.log('Value unknown')
    }
}

describe("When I am connected to the home page", () => {
    beforeEach(() => {
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
        render(
            <Provider store={store}>
                <Router>
                    <Card data={mockMovie} />
                </Router>
            </Provider>
        );
    });
    test("Then I should see, on each card, the movie title", () => {
        expect(screen.getByText(mockMovie.title)).toBeTruthy();
    });
    test("Then I should see, on each card, the movie duration", () => {
        expect(screen.getByText(mockMovie.running_time + 'min')).toBeTruthy();
    });
    test("Then I should see, on each card, the movie rate", () => {
        // Takes all star icons associate to a data-testid and compares the number of changed stars to the rate
        const starIcons = screen.getAllByTestId('star-icon');
        const countColoredStars = starIcons.filter((icon) => icon.classList.contains('orange-star')).length;
        expect(countColoredStars).toBe(giveRating(mockMovie.rt_score)); 
    });
    test("Then I should see, on each card, a like button", () => {
        const likeButton = screen.getByRole('button', { name: /like/i });
        expect(likeButton).toBeTruthy();
    });
});

describe("When I am connected to the home page", () => {
    beforeEach(() => {
        // We mock the store
        const mockStore = configureStore();
        const initialState = {
            isFormOpen: false,
            movies: mockMovie,
            favoriteMovies: [],
            likedMovieIds: [],
            likedMoviesCount: 0,
        };
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Router>
                    <Card data={mockMovie} />
                </Router>
            </Provider>
        );
    });
    describe("When I click on a movie card", () => {
        test("Then I should be redirected to the movie page", () => {
            // Create a click event on the like button and checks the redirection
            const linkElement = screen.getByTestId('mock-card');
            expect(linkElement).toHaveAttribute('href', `${'/movie/' + mockMovie.id}`);
            fireEvent.click(linkElement);
            expect(window.location.pathname).toBe(`${'/movie/' + mockMovie.id}`);
        });
    });
    describe("When I click on the like icon of a movie card", () => {
        test("Then the icon should change", () => {
            // Checks if the like icon has an initial color class
            const likeIcon = screen.getByRole('button', { name: /like/i }).querySelector('p');
            expect(likeIcon).toBeTruthy();
            expect(likeIcon).toHaveClass('like');
            // Checks if the color class changes if we click on the like button
            const likeButton = screen.getByRole('button', { name: /like/i });
            fireEvent.click(likeButton);
            expect(likeIcon).toHaveClass('liked');
        });
    });
    describe("When I click on a liked icon of a movie card", () => {
        test("Then the icon should not change", () => {
            // Checks if the like icon has an initial color class
            const likeIcon = screen.getByRole('button', { name: /like/i }).querySelector('p');
            expect(likeIcon).toBeTruthy();
            expect(likeIcon).toHaveClass('like');
            // Checks if the color class changes if we click on the like button
            const likeButton = screen.getByRole('button', { name: /like/i });
            fireEvent.click(likeButton);
            expect(likeIcon).toHaveClass('liked');
            // Checks if the color class does not change if we click on the like button again
            fireEvent.click(likeButton);
            expect(likeIcon).toHaveClass('liked');
        });
    });
});