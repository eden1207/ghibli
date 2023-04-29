import React from 'react'
import '../../styles/Favorite/Favorite.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'
import { HiTrash } from "react-icons/hi";

import { data } from '../../mockedData/data';

const image1 = data[0].image;
const title1 = data[0].title;

const image2 = data[1].image;
const title2 = data[1].title;

const image3 = data[2].image;
const title3 = data[2].title;

function FavoriteCard({ image, title }) {
    return(
        <div className='favorite-card'>
            <div className='favorite-card-informations'>
                <div className='Movie-Image-Border'>
                    <img src={image} alt={image} className='Movie-Image' />
                </div>
                <h2 className='Favorite-card-title'>{title}</h2>
            </div>
            <div className='Favorite-card-trash-border'>
                <HiTrash className='Favorite-card-trash' />
            </div>
        </div>
    )
}

export default function Favorite() {
    return(
        <div className='Favorite Favorite_dimensions'>
            <Header />
            <CloudyTransition index={1} />
            <div className='favorite-list'>
                <FavoriteCard image={image1} title={title1} />
                <FavoriteCard image={image2} title={title2} />
                <FavoriteCard image={image3} title={title3} />
            </div>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}