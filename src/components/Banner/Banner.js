import React from 'react'
import '../../styles/Banner/Banner.css'
import castle_body from '../../assets/castle_body2.png'
import castle_helix1 from '../../assets/castle_helix1.png'
import castle_helix2 from '../../assets/castle_helix2.png'
import castle_flag from '../../assets/castle_flag.png'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";


function SearchBar() {
    const isErrorBar = false;

    return isErrorBar ? (
        <React.Fragment>
            <div class="research research_dimensions">
                <form>
                    <p>
                        <label htmlFor="search-tool"></label>
                        <input type="text" name="search-tool" id="search-tool" className="search-request search-request_dimensions" placeholder="Look for a movie" size="120" maxLength="30" />
                    </p>
                </form>
                <HiOutlineSearch className='searchbar-logo' />
            </div>
            <div id="JS-error1" className="error JS-error">
                <h3>We have not found what you are looking for… please, try another word such as « castle », « neighbor », etc.</h3>
            </div>
        </React.Fragment>
    ) : (
        <div className="searchbar searchbar_dimensions">
            <form>
                <p>
                    <label htmlFor="search-tool"></label>
                    <input type="text" name="search-tool" id="search-tool" className="search-request search-request_dimensions" placeholder="Find your movie" size="120" maxLength="30" />
                </p>
            </form>
            <div className='logo-container'>
                <HiOutlineSearch className='searchbar-logo' />
            </div>
        </div>
    )
}

function ToolListing() {

    const windowOpen = true;

    return windowOpen ? (
        <React.Fragment>
            <div className="sortElements sortElements_dimensions sortElements_border JS-sortElements"></div>
            <div className="forms forms_dimensions forms_border">

                <div id="JS-ingredientsOpen">
                    <button id="JS-openIngredientsListBtn" className="list-custom titles-color">Titles<SlArrowUp /></button>
                </div>
                <div className="JS-ingredients"></div>

                <div id="JS-applianceOpen">
                    <button id="JS-openApplianceListBtn" className="list-custom directors-color">Directors<SlArrowUp /></button>
                </div>
                <div className="JS-appliance"></div>

                <div id="JS-ustensilsOpen">
                    <button id="JS-openUstensilsListBtn" className="list-custom producers-color">Producers<SlArrowUp /></button>
                </div>
                <div className="JS-ustensils"></div>

            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div className="sortElements sortElements_dimensions sortElements_border JS-sortElements"></div>
            <div className="forms forms_dimensions forms_border">
                <div id="JS-ingredientsOpen" class="ingredientsOpen">
                    <button id="JS-openIngredientsListBtn" className="listTitle ingredient-color">Titles<SlArrowDown /></button>
                </div>
                <div class="JS-ingredients"></div>
                <div id="JS-applianceOpen" className="applianceOpen">
                    <button id="JS-openApplianceListBtn" className="listTitle device-color">Directors<SlArrowDown /></button>
                </div>
                <div class="JS-appliance"></div>
                <div id="JS-ustensilsOpen" className="ustensilsOpen">
                    <button id="JS-openUstensilsListBtn" className="listTitle tool-color">Producers<SlArrowDown /></button>
                </div>
                <div className="JS-ustensils"></div>
            </div>
        </React.Fragment>
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
            </div>
            <SearchBar />
            <ToolListing />
        </div>
    )
}

/*
<div className='castle-content castle-translation'>
<img src={castle_body} className='castlebody' alt='castle body' />
<img src={castle_helix1} className='castlehelix1 castle-helix-rotation1' alt='castle helix 1' />
<img src={castle_helix2} className='castlehelix2 castle-helix-rotation2' alt='castle helix 2' />
<img src={castle_flag} className='castleflag castle-flag-scaling' alt='castle flag' />
</div>
*/