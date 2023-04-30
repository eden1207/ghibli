import React, { useState } from 'react'
import '../../styles/Home/Home.css'
import Card from '../Card/Card'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";

import { data } from '../../mockedData/data';


function stringCutter(tab) {
    let allElements = [];
        
    for(let i=0; i<tab.length; i++) {
        allElements.push(tab[i].split(','));
    }    
    return allElements
}

function sortAllElements(tab) {
    let elementSorted = [];
    let allElements = tab;
        
    for(let i=0; i<allElements.length; i++) {
        let count = 0;
        for(let j=0; j<elementSorted.length; j++) {
            if(allElements[i] === elementSorted[j]) {
                count += 1;
            }
        }
        if(count === 0) {
            elementSorted.push(allElements[i]);
        }
    }    
    return elementSorted
}

class Titles {
    constructor(data) {
        this._data = data
    }

    get list() {
        let allElements = [];

        for(let i=0; i<this._data.length; i++) {
            allElements.push(this._data[i].title.toLowerCase());
        }

        return sortAllElements(allElements)
    }
}

class Directors {
    constructor(data) {
        this._data = data
    }

    get list() {
        let allElements = [];

        for(let i=0; i<this._data.length; i++) {
            allElements.push(this._data[i].director.toLowerCase());
        }

        return sortAllElements(allElements)
    }
}

class Producers {
    constructor(data) {
        this._data = data
    }

    get list() {
        let firstTreatment = [];
        for(let i=0; i<this._data.length; i++) {
            firstTreatment.push(this._data[i].producer.toLowerCase());
        }
        const multiProducersSeparation = stringCutter(firstTreatment);
        let secondTreatment = [];
        for(let i=0; i<multiProducersSeparation.length; i++) {
            const resultElement = multiProducersSeparation[i];
            for(let j=0; j<resultElement.length; j++) {
                secondTreatment.push(resultElement[j].trim())
            }
        }
        return sortAllElements(secondTreatment)
    }
}

class List {
    constructor(data, type) {
        if(type === 'titles') {
            return new Titles(data)
        } else if(type === 'directors') {
            return new Directors(data)
        } else if(type === 'producers') {
            return new Producers(data)
        }else{
            console.log('Unknow list')
        }
    }
}

// Listes par ordre alphabétique
const listTitles = new List(data, 'titles').list.sort();
const listDirectors = new List(data, 'directors').list.sort();
const listProducers = new List(data, 'producers').list.sort();


function FilterBtn ({ name }) {

    const isBtnSelected = false;

    return isBtnSelected ? (
        <React.Fragment></React.Fragment>
    ) : (
        <React.Fragment>
            <button className="filterBtn">{name}</button>
        </React.Fragment>
    )
}

function ListFilter ({ listTitle, listStyle, data, barTitle }) {

    const [isWindowOpen, setWindow] = useState(false);

    return isWindowOpen ? (
        <div className={"listOpen-custom " + listStyle + "-color"}>
            <button 
                className="listBtn" 
                onClick={() => {
                    setWindow(false);
                }}
            >
                {listTitle}<SlArrowUp />
            </button>
            <MiniSearchBar barTitle={barTitle} />
            <div className="listElements">
                {data.map((member, index) => 
                    <FilterBtn key={`member${index}`} name={member} />
                )}
            </div>
        </div>
    ) : (
        <div className={"listClose-custom " + listStyle + "-color"}>
            <button 
                className="listBtn" 
                onClick={() => {
                    setWindow(true);
                }}
            >
                {listTitle}<SlArrowDown />
            </button>
        </div>
    )
}

function MiniSearchBar({ barTitle }) {

    return (
        <div className="minisearchbar minisearchbar_dimensions">
            <form>
                <p>
                    <label htmlFor="search-tool"></label>
                    <input type="text" name="search-tool" id="search-tool" className="minisearch-request minisearch-request_dimensions" placeholder={barTitle} size="120" maxLength="30" />
                </p>
            </form>
            <div className='minilogo-container'>
                <HiOutlineSearch className='minisearchbar-logo' />
            </div>
        </div>
    )
}


export default function Home() {
    return(
        <div className='Home Home_dimensions'>
            <Header />
            <Banner />
            <CloudyTransition index={1} />
            <main className='main'>

                <div className="sortElements sortElements_dimensions sortElements_border JS-sortElements"></div>

                <div className="forms forms_dimensions forms_border">
                    <ListFilter listTitle={'Titles'} listStyle={'titles'} data={listTitles} barTitle={'Find your title'} />
                    <ListFilter listTitle={'Directors'} listStyle={'directors'} data={listDirectors} barTitle={'Find your director'} />
                    <ListFilter listTitle={'Producers'} listStyle={'producers'} data={listProducers} barTitle={'Find your producer'} />
                </div>

                <div className='card-collection card-collection_dimensions card-collection_border card-collection_gap'>
                    {data.map((data) => 
                        <Card key={data.id} data={data} />
                    )}
                </div>
            </main>
            <CloudyTransition index={2} />
            <Footer />
        </div>
    )
}