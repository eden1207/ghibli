import React, { useState, useEffect } from 'react'
import '../../styles/Home/Home.css'
import Card from '../Card/Card'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { data } from '../../mockedData/data';
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../Store/Store.js";

import { getTitlesTags, getDirectorsTags, getProducersTags } from '../../utils/TagHelpers';
import { searchKeyword, filterMoviesWithTags } from '../../utils/SearchHelpers';


function renderTags(tags, setTags, tagStyle) {
    return tags.map((tag, index) => (
        <div key={`${tag}-${index}`} className={`tag ${tagStyle}-tag`}>
            <span>{tag}</span>
            <button
                className="tag-close-btn"
                onClick={() => {
                    // Immutability of the data. I make a copy of keywords and I add
                    // member in the array
                    setTags((prevTags) => prevTags.filter((member) => member !== tag));
                }}
            >
                <IoClose />
            </button>
        </div>
    ));
}

export default function Home() {

    const [isTitlesOpen, setIsTitlesOpen] = useState(false);
    const [isDirectorsOpen, setIsDirectorsOpen] = useState(false);
    const [isProducersOpen, setIsProducersOpen] = useState(false);

    const [titlesTags, setTitlesTags] = useState([]);
    const [directorsTags, setDirectorsTags] = useState([]);
    const [producersTags, setProducersTags] = useState([]);

    const [word, setWord] = useState('');

    let movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    const listTitles = getTitlesTags(movies);
    const listDirectors = getDirectorsTags(movies);
    const listProducers = getProducersTags(movies);

    useEffect(() => {
        let tags = [];
        for(let i=0; i<titlesTags.length; i++) {
            tags.push(titlesTags[i]);
        }
        for(let i=0; i<directorsTags.length; i++) {
            tags.push(directorsTags[i]);
        }
        for(let i=0; i<producersTags.length; i++) {
            tags.push(producersTags[i]);
        }
        const updatedData = filterMoviesWithTags(data, tags);
        dispatch(setMovies(updatedData));
    }, [titlesTags, directorsTags, producersTags, dispatch]);




    const listFilters = [
        {
            'listTitle': 'Titles',
            'listStyle': 'titles',
            'data': listTitles,
            'isListOpen': isTitlesOpen,
            'setIsListOpen': setIsTitlesOpen,
            'setTags': setTitlesTags,
            'barTitle': 'Find your title'
        },
        {
            'listTitle': 'Directors',
            'listStyle': 'directors',
            'data': listDirectors,
            'isListOpen': isDirectorsOpen,
            'setIsListOpen': setIsDirectorsOpen,
            'setTags': setDirectorsTags,
            'barTitle': 'Find your director'
        },
        {
            'listTitle': 'Producers',
            'listStyle': 'producers',
            'data': listProducers,
            'isListOpen': isProducersOpen,
            'setIsListOpen': setIsProducersOpen,
            'setTags': setProducersTags,
            'barTitle': 'Find your producer'
        }
    ];




    return(
        <div className='Home Home_dimensions'>
            <Header />
            <Banner />
            <CloudyTransition index={1} />
            <div className="tags">
                {renderTags(titlesTags, setTitlesTags, 'title')}
                {renderTags(directorsTags, setDirectorsTags, 'director')}
                {renderTags(producersTags, setProducersTags, 'producer')}
            </div>
            <main className='main'>

                <div className="forms forms_dimensions forms_border">
                    {
                        listFilters.map((filter) => {
                            const isListOpen = filter.isListOpen;
                            const setIsListOpen = filter.setIsListOpen;
                            const setTags = filter.setTags;
                            const keywordsList = filter.data;
                            const sortedKeywords = searchKeyword(word, keywordsList);
                            return isListOpen ? (
                                <div key={filter.listTitle} className={"listOpen-custom " + filter.listStyle + "-color"}>
                                    <button 
                                        className="listBtn" 
                                        onClick={() => {
                                            setIsListOpen(false);
                                        }}
                                    >
                                        {filter.listTitle}<SlArrowUp />
                                    </button>
                                    <div className="minisearchbar minisearchbar_dimensions">
                                        <form>
                                            <p>
                                                <label htmlFor="search-tool"></label>
                                                <input 
                                                    type="text" 
                                                    name="search-tool" 
                                                    id="search-tool" 
                                                    className="minisearch-request minisearch-request_dimensions" 
                                                    placeholder={filter.barTitle} 
                                                    size="120" 
                                                    maxLength="30" 
                                                    onChange={(e) => {setWord(e.target.value)}}
                                                />
                                            </p>
                                        </form>
                                        <div className='minilogo-container'>
                                            <HiOutlineSearch className='minisearchbar-logo' />
                                        </div>
                                    </div>
                                    <div className="listElements">
                                        {
                                            sortedKeywords.map((member, index) => 
                                                <button 
                                                    key={`member${index}`} 
                                                    className="filterBtn"
                                                    onClick={() => {
                                                        //Immutability of the data. I make a copy of keywords and I add
                                                        // member in the array
                                                        setTags(prevTags => [...prevTags, member]);
                                                    }}
                                                >
                                                    {member}
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div key={filter.listTitle} className={"listClose-custom " + filter.listStyle + "-color"}>
                                    <button 
                                        className="listBtn" 
                                        onClick={() => {
                                            setIsListOpen(true);
                                        }}
                                    >
                                        {filter.listTitle}<SlArrowDown />
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='card-collection card-collection_dimensions card-collection_border card-collection_gap'>
                    {movies.map((data) => 
                        <Card key={data.id} data={data} />
                    )}
                </div>
            </main>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}