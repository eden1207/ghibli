import React from 'react'
import '../../styles/Card/Card.css'

/*import { data } from '../../mockedData/data';*/
import star_black_dust from '../../assets/star_black_dust.png'
import rock_black_dust from '../../assets/rock_black_dust.png'
import { AiFillHeart } from "react-icons/ai";


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


function StateBlackDust({ state }) {

    return state ? (
        <div className='black-dust-group'>
            <img src={star_black_dust} alt="star_black_dust" className='black-dust' />
        </div>
    ) : (
        <div className='black-dust-group'>
            <img src={rock_black_dust} alt="rock_black_dust" className='black-dust' />
        </div>
    )
}


function BlackDust({ rating }) {

    const number  = giveRating(rating);

    const blackDustState = [false, false, false, false, false];

    for(let i=0; i<number; i++) {
        blackDustState[i] = true;
    }

    return(
        <div className='black-dust-group'>
            {blackDustState.map((state, index) => <StateBlackDust key={`'state'-${index}`} state={state} />)}
        </div>
    )
}



export default function Card({ image, title, duration, rating }) {

    return(
        <div className='Card'>
            <div className='Card-image-border'>
                <img src={image} alt={image} className='Card-image' />
            </div>
            <div className='Card-text'>

                <div className="card-logo card-logo_dimensions card-logo_aspect animation-coeur">
                    <div className='coeur1'><AiFillHeart /></div>
                    <div className='coeur2'><AiFillHeart /></div>
                </div>

                <div className='Card-title'>
                    <h2 className='Card-title1'>{title}</h2>
                    <h3 className='Card-title2'>Duration: {duration}min</h3>
                </div>
                <BlackDust rating={rating} />
            </div>
        </div>
    )
}


/*
<div className='heart'><AiFillHeart className='heart-style' /></div>
 */