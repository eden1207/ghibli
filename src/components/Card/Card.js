import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Styles
import './styles/Card.css'

// Icons
import { AiFillLike, AiFillClockCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

// Store
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteMovies } from "../Store/Store.js";

// Constructor Pattern
import { Movie } from '../../utils/Movie';


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

/** Component to display the rating stars */
function Stars({ rating }) {
    const number  = giveRating(rating);

    /**
     * Create an arraw of 5 element 'gray'. We transform the first 'orange' in 'gray' as function
     * of the rating value
     */
    const colorList = Array.from({ length: 5 }, (_, index) =>
        index < number ? 'orange' : 'gray'
    );

    return (
        <div className='starline'>
            {
                colorList.map((color, index) => 
                    <FaStar 
                        key={`${color}-${index}`} 
                        data-testid={'star-icon'}
                        className={color + '-star'} 
                    />
                )
            }
        </div>
    )
} 

/**
 * Component to display a movie card
 */
export default function Card({ data }) {
    const movie = new Movie(data);
    let favoriteMovies = useSelector((state) => state.favoriteMovies);
    const [isLikeSelected, setIsLikeSelected] = useState(false);
    const dispatch = useDispatch();
    const likedMovieIds = useSelector((state) => state.likedMovieIds);
    return(
        <Link 
            data-testid="mock-card"
            className='Card' 
            to={'/movie/' + movie.id}
        >
            <div className='Card-image-border'>
                <img src={movie.image} alt={movie.image} className='Card-image' />
            </div>
            <div className='Card-text'>
                <div className='Card-title'>
                    <h2 className='Card-title1'>{movie.title}</h2>
                    <p className='Card-title2'><AiFillClockCircle className='clock-symbol'/> {movie.duration}min</p>
                    <Stars rating={movie.score} />
                </div>

                <button
                    aria-label='like'
                    className='likebtn'
                    onClick={(e) => {
                        e.preventDefault();
                        if(!isLikeSelected && !likedMovieIds.includes(movie.id)) {
                            // Immutabilité
                            dispatch(setFavoriteMovies([...favoriteMovies, movie]));
                            setIsLikeSelected(true);
                        }
                    }}
                >
                    <p className={`${isLikeSelected || likedMovieIds.includes(movie.id) ? 'liked' : 'like'}`}>
                        <AiFillLike />
                    </p>
                </button>
            </div>
        </Link>
    )
}