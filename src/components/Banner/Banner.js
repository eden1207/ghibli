import React, { useState } from 'react'
import '../../styles/Banner/Banner.css'
import castle_body from '../../assets/castle_body2.png'
import castle_helix1 from '../../assets/castle_helix1.png'
import castle_helix2 from '../../assets/castle_helix2.png'
import castle_flag from '../../assets/castle_flag.png'

import { HiOutlineSearch } from "react-icons/hi";
import sky_cloud_background from '../../assets/sky_cloud_background.png'
import moving_sky_cloud1 from '../../assets/moving_sky_cloud1.png'
import moving_sky_cloud2 from '../../assets/moving_sky_cloud2.png'
import castle_clothes from '../../assets/castle_clothes.png'

import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../Store/Store.js";

import { getTitlesTags } from '../../utils/TagHelpers';
import { searchKeyword, filterMoviesWithSearchBar } from '../../utils/SearchHelpers';

import { data } from '../../mockedData/data';


function SearchBar() {
    const dispatch = useDispatch();
    const [isErrorBar, setIsErrorBar] = useState(false);
    let movies = useSelector((state) => state.movies);

    return (
        <div className='packageSearchBarErrorMessage'>
            <div className="searchbar searchbar_dimensions">
                <form>
                    <p>
                        <label htmlFor="search-tool"></label>
                        <input 
                            type="text" 
                            name="search-tool" 
                            id="search-tool" 
                            className="search-request search-request_dimensions" 
                            placeholder="Find your movie" 
                            size="120" 
                            maxLength="30" 
                            onChange={(e) => {
                                const word = e.target.value;
                                if(word.length>2) {
                                    const listTitles = getTitlesTags(data);
                                    let searchedKeywords = searchKeyword(word, listTitles);
                                    const searchedMovies = filterMoviesWithSearchBar(data, searchedKeywords);
                                    dispatch(setMovies(searchedMovies));
                                    if(searchedKeywords.length === 0) {
                                        setIsErrorBar(true);
                                    } else{
                                        setIsErrorBar(false);
                                    }
                                } else{
                                    dispatch(setMovies(data));
                                    setIsErrorBar(false);
                                }
                            }}
                        />
                    </p>
                </form>
                <div className='logo-container'>
                    <HiOutlineSearch className='searchbar-logo' />
                </div>
            </div>
            {
                isErrorBar ? (
                    <div className="errorMessage-container">
                        <h3 className="errorMessage">We have not found what you are looking for… please, try another word such as « castle », « neighbor », etc.</h3>
                    </div>
                ) : (
                    null
                )
            }
        </div>
    )
}

export default function Banner() {
    return(
        <div className='Banner'>
            <div className='castle-content castle-translation'>
                <img src={castle_body} className='castlebody' alt='castle body' />
                <img src={castle_helix1} className='castlehelix1 castle-helix-rotation1' alt='castle helix 1' />
                <img src={castle_helix2} className='castlehelix2 castle-helix-rotation2' alt='castle helix 2' />
                <img src={castle_flag} className='castleflag castle-flag-scaling' alt='castle flag' />
                <img src={castle_clothes} className='castleclothes castle-clothes-scaling' alt='castle clothes' />
            </div>
            <div className='moving-clouds-content'>
                <img src={moving_sky_cloud2} className='moving-cloud1 cloud-translation4' alt='moving cloud 1' />
                <img src={moving_sky_cloud1} className='moving-cloud2 cloud-translation3' alt='moving cloud 2' />
                <img src={moving_sky_cloud2} className='moving-cloud3 cloud-translation2' alt='moving cloud 3' />
                <img src={moving_sky_cloud1} className='moving-cloud4 cloud-translation1' alt='moving cloud 4' />
            </div>
            <div className='sky-cloud-background-content'>
                <img src={sky_cloud_background} className='sky-cloud-background' alt='sky cloud' />
            </div>
            <SearchBar />
        </div>
    )
}