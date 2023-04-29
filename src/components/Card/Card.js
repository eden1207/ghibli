import React from 'react'
import '../../styles/Card/Card.css'

/*import { data } from '../../mockedData/data';*/
import { Link } from 'react-router-dom';
//import star_black_dust from '../../assets/star_black_dust.png'
//import rock_black_dust from '../../assets/rock_black_dust.png'
import { AiFillLike, AiFillClockCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";


class Movie {
    constructor(data) {
      this._data = data
    }
  
    get id() {
      return this._data.id
    }
  
    get description() {
      return this._data.description
    }
  
    get director() {
      return this._data.director
    }
  
    get image() {
      return this._data.image
    }

    get banner() {
        return this._data.movie_banner
    }

    get originalTitle() {
        return this._data.original_title
    }

    get producer() {
        return this._data.producer
    }

    get score() {
        return this._data.rt_score
    }

    get duration() {
        return this._data.running_time
    }

    get year() {
        return this._data.release_date
    }

    get title() {
        return this._data.title
    }
}


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

function Stars({ rating }) {

    const number  = giveRating(rating);

    const colorList = ['gray', 'gray', 'gray', 'gray', 'gray'];

    for(let i=0; i<number; i++) {
        colorList[i] = 'orange';
    }

    return (
        <div className='starline'>
            {colorList.map((color, index) => <FaStar key={`${color}-${index}`} className={color + '-star'} />)}
        </div>
    )
} 


/*function StateBlackDust({ state }) {

    return state ? (
        <div className='black-dust-group'>
            <img src={star_black_dust} alt="star_black_dust" className='black-dust' />
        </div>
    ) : (
        <div className='black-dust-group'>
            <img src={rock_black_dust} alt="rock_black_dust" className='black-dust' />
        </div>
    )
}*/


/*function BlackDust({ rating }) {

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
}*/



export default function Card({ data }) {

    const movie = new Movie(data);

    return(
        <Link className='Card' to={'/movie/' + movie.id}>
            <div className='Card-image-border'>
                <img src={movie.image} alt={movie.image} className='Card-image' />
            </div>
            <div className='Card-text'>
                <div className='Card-title'>
                    <h2 className='Card-title1'>{movie.title}</h2>
                    <p className='Card-title2'><AiFillClockCircle className='clock-symbol'/> {movie.duration}min</p>
                    <Stars rating={movie.score} />
                </div>
                <div className="card-logo card-logo_dimensions card-logo_aspect animation-like">
                    <div className='like1'><AiFillLike /></div>
                    <div className='like2'><AiFillLike /></div>
                </div>
            </div>
        </Link>
    )
}


/*
<div className='heart'><AiFillHeart className='heart-style' /></div>
 */