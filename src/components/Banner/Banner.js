import React from 'react'
import '../../styles/Banner/Banner.css'
import castle_body from '../../assets/castle_body2.png'
import castle_helix1 from '../../assets/castle_helix1.png'
import castle_helix2 from '../../assets/castle_helix2.png'
import castle_flag from '../../assets/castle_flag.png'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import sky_cloud_background from '../../assets/sky_cloud_background.png'
import moving_sky_cloud1 from '../../assets/moving_sky_cloud1.png'
import moving_sky_cloud2 from '../../assets/moving_sky_cloud2.png'
import castle_clothes from '../../assets/castle_clothes.png'


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
            <ToolListing />
        </div>
    )
}

/*
cloud-translation4
cloud-translation3
cloud-translation2
cloud-translation1
 */

/*
castle-translation
<div className='castle-content castle-translation'>
<img src={castle_body} className='castlebody' alt='castle body' />
<img src={castle_helix1} className='castlehelix1 castle-helix-rotation1' alt='castle helix 1' />
<img src={castle_helix2} className='castlehelix2 castle-helix-rotation2' alt='castle helix 2' />
<img src={castle_flag} className='castleflag castle-flag-scaling' alt='castle flag' />
</div>
*/