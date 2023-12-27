import React from 'react'
import './styles/MoviePage.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'

import { data } from '../../mockedData/data';

import { useParams } from 'react-router-dom';

/*const index = 5;
const movieBanner = data[index].movie_banner;
const title = data[index].title;
const originalTitle = data[index].original_title;
const director = data[index].director;
const producer = data[index].producer;
const year = data[index].release_date;
const duration = data[index].running_time;
const description = data[index].description;*/


export default function MoviePage() {

    const { id } = useParams();

    function giveMovieData(id, data) {
        for(let i=0; i<data.length; i++) {
            if(data[i].id === id) {
                return i
            }
        }
    }
    /*const index = 5;*/
    const index = giveMovieData(id, data);
    const movieBanner = data[index].movie_banner;
    const title = data[index].title;
    const originalTitle = data[index].original_title;
    const director = data[index].director;
    const producer = data[index].producer;
    const year = data[index].release_date;
    const duration = data[index].running_time;
    const description = data[index].description;

    return(
        <div className='MoviePage MoviePage_dimensions'>
            <Header />
            <div className='MovieData MovieData_dimensions'>
                <div className='Movie-Banner-border'>
                    <img src={movieBanner} alt={movieBanner} className='Movie-Banner' />
                </div>
                <article className='Movie-Article'>
                    <div className='Article-Banner'>
                        <h2 className='Article-title'>{title}</h2>
                        <h3 className='Article-subtitle'>({originalTitle})</h3>
                        <ul className='Article-List'>
                            <li className='List-text'>Directed by {director}</li>
                            <li className='List-text'>Produced by {producer}</li>
                            <li className='List-text'>Year: {year}</li>
                            <li className='List-text'>Duration: {duration}min</li>
                        </ul>
                    </div>
                    <div className='Article-text'>
                        <p>{description}</p>
                    </div>
                </article>
            </div>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}