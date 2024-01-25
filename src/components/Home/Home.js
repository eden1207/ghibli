import React, { useState, useEffect, useRef } from 'react'

// Styles
import './styles/Home.css'

// Components
import Card from '../Card/Card'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// Store
import { data } from '../../mockedData/data';
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../Store/Store.js";

// Research functionnalities
import { getTitlesTags, getDirectorsTags, getProducersTags } from '../../utils/TagHelpers';
import { searchKeyword, filterMoviesWithTags } from '../../utils/SearchHelpers';

/** Function to generate a list of tag buttons when the user clicks on a tag */
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

/** Component to display the home page */
export default function Home() {

    /** States to open each list of tags */
    const [isTitlesOpen, setIsTitlesOpen] = useState(false);
    const [isDirectorsOpen, setIsDirectorsOpen] = useState(false);
    const [isProducersOpen, setIsProducersOpen] = useState(false);

    /** States to put each tags from the titles/directors/producers the user clicks on */
    const [titlesTags, setTitlesTags] = useState([]);
    const [directorsTags, setDirectorsTags] = useState([]);
    const [producersTags, setProducersTags] = useState([]);

    /** 
     * State to set a word the user writes on a serch bar.
     * This word is used to filter a list of tags available.
     */
    const [word, setWord] = useState('');

    /**
     * List of movies imported from the store
     */
    let movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    /**
     * Functions to generate a list of tags from a list of movies.
     * Then, these lists are displayed and the user should be able to click on it to filter
     * the movies with tags. 
     */
    const listTitles = getTitlesTags(movies);
    const listDirectors = getDirectorsTags(movies);
    const listProducers = getProducersTags(movies);

    /** 
     * useEffect to generate an array of tags the user click on. 
     * Then, the movies are filtered as function of the list of tags.
     */
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


    /**
     * useRef to refer to the DOM element of the tags lists
     */
    const titlesBtnRef = useRef(null);
    const directorsBtnRef = useRef(null);
    const producersBtnRef = useRef(null);

    /**
     * Array of objects with the characteristic of each lists of tags
     */
    const listFilters = [
        {
            'listTitle': 'Titles',
            'listStyle': 'titles',
            'data': listTitles,
            'isListOpen': isTitlesOpen,
            'setIsListOpen': setIsTitlesOpen,
            'setTags': setTitlesTags,
            'barTitle': 'Find your title',
            'btnRef': titlesBtnRef
        },
        {
            'listTitle': 'Directors',
            'listStyle': 'directors',
            'data': listDirectors,
            'isListOpen': isDirectorsOpen,
            'setIsListOpen': setIsDirectorsOpen,
            'setTags': setDirectorsTags,
            'barTitle': 'Find your director',
            'btnRef': directorsBtnRef
        },
        {
            'listTitle': 'Producers',
            'listStyle': 'producers',
            'data': listProducers,
            'isListOpen': isProducersOpen,
            'setIsListOpen': setIsProducersOpen,
            'setTags': setProducersTags,
            'barTitle': 'Find your producer',
            'btnRef': producersBtnRef
        }
    ];

    function handleClickOutside (event, setIsOpen, btnRef) {
        // Refer to the DOM element and check if the click event is out the target
        if (btnRef.current && !btnRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
       
    useEffect(() => {
        // When a tags list is openned, it had the function used when the user clicks out a tags list
        document.addEventListener('click', (event) => handleClickOutside(event, setIsTitlesOpen, titlesBtnRef));
      
        // When the user closes a list, this function is activated to clean the event listener
        return () => {
            document.removeEventListener('click', (event) => handleClickOutside(event, setIsTitlesOpen, titlesBtnRef));
        };
    }, []);

    useEffect(() => {
        document.addEventListener('click', (event) => handleClickOutside(event, setIsDirectorsOpen, directorsBtnRef));

        return () => {
            document.removeEventListener('click', (event) => handleClickOutside(event, setIsDirectorsOpen, directorsBtnRef));
        };
    }, []);

    useEffect(() => {
        document.addEventListener('click', (event) => handleClickOutside(event, setIsProducersOpen, producersBtnRef));

        return () => {
            document.removeEventListener('click', (event) => handleClickOutside(event, setIsProducersOpen, producersBtnRef));
        };
    }, []);

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
                                <div key={filter.listTitle} className={"listOpen-custom " + filter.listStyle + "-color"} ref={filter.btnRef}>
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
                                <div key={filter.listTitle} className={"listClose-custom " + filter.listStyle + "-color"} ref={filter.btnRef}>
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
                        <Card data-testid={"mock-card"} key={data.id} data={data} />
                    )}
                </div>
            </main>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}