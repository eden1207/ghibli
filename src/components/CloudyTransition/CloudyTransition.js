import React from 'react'
import '../../styles/CloudyTransition/CloudyTransition.css'
import cloudy_transition from '../../assets/cloudy_transition_resize2.png'


export default function CloudyTransition({ index }) {
    return(
        <div className={'cloudy-transition' + index}>
            <img src={cloudy_transition} className='cloudy' alt='cloudy transition' />
        </div>
    )
}