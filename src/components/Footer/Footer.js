import React from 'react'
import rocks from '../../assets/rocks.png'
//import kodama1 from '../../assets/kodama1.png'
import kodama1_head from '../../assets/kodama1_test_tete1.png'
import kodama1_body from '../../assets/kodama1_test_body1.png'
//import kodama1_light_head from '../../assets/kodama1_test_light_tete1.png'
//import kodama1_light_body from '../../assets/kodama1_test_light_body1.png'

import kodama2_head from '../../assets/kodama2_test_tete1.png'
import kodama2_body from '../../assets/kodama2_test_body1.png'

import kodama3_head from '../../assets/kodama3_test_tete1.png'
import kodama3_body from '../../assets/kodama3_test_body1.png'

import forest from '../../assets/forest.jpg'

import fog from '../../assets/fog.png'

//import kodama2 from '../../assets/kodama2.png'
//import kodama3 from '../../assets/kodama3.png'
import '../../styles/Footer/Footer.css'

/*<footer className='footer footer_dimensions'>
<div className="kodamas">
    <img src={kodama1} className="kodama1" alt="kodama1" />
    <img src={kodama2} className="kodama2" alt="kodama2" />
    <img src={kodama3} className="kodama3" alt="kodama3" />
</div>
<img src={rocks} className="rocks" alt="rocks" />
</footer>*/

/*

        <footer className='footer footer_dimensions'>
            <div className="kodamas">
                <div className="kodama1">
                    <img src={kodama1_body} className="kodama1_body" alt="kodama1" />
                    <img src={kodama1_head} className="kodama1_head rotation1" alt="kodama1" />
                </div>
                <img src={kodama2} className="kodama2" alt="kodama2" />
                <img src={kodama3} className="kodama3" alt="kodama3" />
            </div>
            <img src={rocks} className="rocks" alt="rocks" />
        </footer>
 */


export default function Footer() {
    return(
        <footer className='footer footer_dimensions'>
            <div  className='fog-container'>
                <img src={fog} className="fog" alt="kodama1" />
            </div>
            <div  className='forest-container'>
                <img src={forest} className="forest" alt="kodama1" />
            </div>
            <div className="kodamas">
                <div className="kodama1">
                    <img src={kodama1_body} className="kodama1_body brightness1" alt="kodama1" />
                    <img src={kodama1_head} className="kodama1_head rotation1" alt="kodama1" />
                </div>
                <div className="kodama2">
                    <img src={kodama2_body} className="kodama2_body brightness1" alt="kodama1" />
                    <img src={kodama2_head} className="kodama2_head rotation2" alt="kodama1" />
                </div>
                <div className="kodama3">
                    <img src={kodama3_body} className="kodama3_body brightness1" alt="kodama1" />
                    <img src={kodama3_head} className="kodama3_head rotation2" alt="kodama1" />
                </div>
            </div>
            <img src={rocks} className="rocks" alt="rocks" />
        </footer>
    )
}


/*
        <footer className='footer footer_dimensions'>
            <div className="kodamas">
                <div className="kodama-all">
                    <div className="kodama1_light">
                        <img src={kodama1_light_body} className="kodama1_light_body" alt="kodama1" />
                        <img src={kodama1_light_head} className="kodama1_light_head rotation1" alt="kodama1" />
                    </div>
                    <div className="kodama1">
                        <img src={kodama1_body} className="kodama1_body" alt="kodama1" />
                        <img src={kodama1_head} className="kodama1_head rotation1" alt="kodama1" />
                    </div>
                </div>
                <img src={kodama2} className="kodama2" alt="kodama2" />
                <img src={kodama3} className="kodama3" alt="kodama3" />
            </div>
            <img src={rocks} className="rocks" alt="rocks" />
        </footer>
 */