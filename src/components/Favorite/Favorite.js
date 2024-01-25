import React from 'react'
import './styles/Favorite.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'
import { HiTrash } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { setFavoriteMovies, removeFromFavorites } from "../Store/Store.js";


function FavoriteCard({ movie, onRemove }) {
    const dispatch = useDispatch();
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
                    dispatch(removeFromFavorites(movie.id));
                    onRemove(movie.id);
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

    const handleRemoveFromFavorites = (movieId) => {
        // Dispatch l'action pour supprimer le film de la liste des favoris
        dispatch(setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== movieId)));
    };
    return(
        <div 
            data-testid="favorite-component"
            className='Favorite Favorite_dimensions'
        >
            <Header />
            <CloudyTransition index={1} />
            <div className='favorite-list'>
                {
                    favoriteMovies.map((movie) => (
                        <FavoriteCard key={movie.id} movie={movie} onRemove={handleRemoveFromFavorites} />
                    ))
                }
            </div>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}