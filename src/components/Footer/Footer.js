import React from 'react'

import forest from '../../assets/forest.jpg'
import fog from '../../assets/fog.png'
import rocks from '../../assets/rocks.png'

//import backgroung_cloud from '../../assets/backgroung_cloud.png'
//import backgroung_cloud2 from '../../assets/backgroung_cloud_test5.png'
//import backgroung_cloud2bis from '../../assets/backgroung_cloud_test6.png'

import moving_fog1 from '../../assets/moving_fog1.png'


import kodama1_head from '../../assets/kodama1_head.png'
import kodama1_body from '../../assets/kodama1_body.png'

import kodama2_head from '../../assets/kodama2_head.png'
import kodama2_body from '../../assets/kodama2_body.png'

import kodama3_head from '../../assets/kodama3_head.png'
import kodama3_body from '../../assets/kodama3_body.png'

import './styles/Footer.css'

/*

            <div className='backgroundClouds clouds-stage1'>
                <img src={backgroung_cloud} className='backgroundCloud1' alt='backgroung cloud' />
                <img src={backgroung_cloud} className='backgroundCloud2' alt='backgroung cloud' />
            </div>
            <div className='backgroundClouds clouds-stage2'>
                <img src={backgroung_cloud} className='backgroundCloud1' alt='backgroung cloud' />
                <img src={backgroung_cloud} className='backgroundCloud2' alt='backgroung cloud' />
            </div>

 */


export default function Footer() {
    return(
        <footer className='footer footer_dimensions'>
            <div  className='fog-container'>
                <img src={fog} className="fog" alt="fog" />
            </div>
            <div  className='forest-container'>
                <img src={forest} className="forest" alt="forest" />
            </div>
            <div className="kodamas">
                <div className="kodama1">
                    <img src={kodama1_body} className="kodama1-body kodama1-body-animation" alt="kodama1_body" />
                    <img src={kodama1_head} className="kodama1-head kodama1-head-animation" alt="kodama1_head" />
                </div>
                <div className="kodama2">
                    <img src={kodama2_body} className="kodama2-body kodama2-body-animation" alt="kodama2_body" />
                    <img src={kodama2_head} className="kodama2-head kodama2-head-animation" alt="kodama2_head" />
                </div>
                <div className="kodama3">
                    <img src={kodama3_body} className="kodama3-body kodama3-body-animation" alt="kodama3_body" />
                    <img src={kodama3_head} className="kodama3-head kodama3-head-animation" alt="kodama3_head" />
                </div>
            </div>
            <img src={rocks} className="rocks" alt="rocks" />
            <div className='moving_fog'>
                <img src={moving_fog1} className='moving_fog1 fog1-animation' alt='moving fog' />
                <img src={moving_fog1} className='moving_fog2 fog2-animation' alt='moving fog' />
                <img src={moving_fog1} className='moving_fog3 fog3-animation' alt='moving fog' />
                <img src={moving_fog1} className='moving_fog4 fog4-animation' alt='moving fog' />
            </div>
        </footer>
    )
}

/**
 *             <div className='backgroundClouds2 clouds-stage3'>
                <img src={backgroung_cloud2} className='backgroundCloud3 cloud-animation1' alt='backgroung cloud' />
                <img src={backgroung_cloud2bis} className='backgroundCloud4 cloud-animation2' alt='backgroung cloud' />
            </div>
 */