import React from 'react'
import '../../styles/CloudyTransition/CloudyTransition.css'
import cloudy_transition from '../../assets/cloudy_transition.png'


export default function CloudyTransition() {
    return(
        <div className='cloudy-transition'>
            <img src={cloudy_transition} className='cloudy' alt='cloudy transition' />
        </div>
    )
}