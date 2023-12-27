import React, { useState } from 'react'
import '../../styles/Favorite/Favorite.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'
import { HiTrash } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { setFavoriteMovies } from "../Store/Store.js";


function FavoriteCard({ movie, favoriteMovies, setMovieId }) {
    //const dispatch = useDispatch();
    return(
        <div className='favorite-card'>
            <div className='favorite-card-informations'>
                <div className='Movie-Image-Border'>
                    <img src={movie.image} alt={movie.image} className='Movie-Image' />
                </div>
                <h2 className='Favorite-card-title'>{movie.title}</h2>
            </div>
            <button 
                className='Favorite-card-trash-border'
                onClick={(e) => {
                    e.preventDefault();
                    /*let sortedFavoriteMovies = favoriteMovies.filter((e) => {
                        if(e.id !== movie.id) {
                            return true
                        } else{
                            return false
                        }
                    });*/
                    //console.log(sortedFavoriteMovies);
                    //dispatch(setFavoriteMovies(sortedFavoriteMovies));
                    setMovieId(movie.id);
                    //dispatch(setFavoriteMovies(prevFavoriteMovies => [...prevFavoriteMovies, sortedFavoriteMovies]));
                }}
            >
                <HiTrash className='Favorite-card-trash' />
            </button>
        </div>
    )
}

export default function Favorite() {
    const dispatch = useDispatch();
    let favoriteMovies = useSelector((state) => state.favoriteMovies);
    console.log(favoriteMovies)
    const [movieId, setMovieId] = useState(null);
    console.log(movieId)
    let sortedFavoriteMovies = favoriteMovies.filter((e) => e.id !== movieId);
    console.log(sortedFavoriteMovies)
    //dispatch(setFavoriteMovies(sortedFavoriteMovies));
    dispatch(setFavoriteMovies(prevFavoriteMovies => [...prevFavoriteMovies, sortedFavoriteMovies]));
    return(
        <div className='Favorite Favorite_dimensions'>
            <Header />
            <CloudyTransition index={1} />
            <div className='favorite-list'>
                {
                    sortedFavoriteMovies.map((movie) => 
                        <FavoriteCard key={movie.id} movie={movie} sortedFavoriteMovies={sortedFavoriteMovies} setMovieId={setMovieId} />
                    )
                }
            </div>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}