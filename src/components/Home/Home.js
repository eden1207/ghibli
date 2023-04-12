import React from 'react'
import '../../styles/Home/Home.css'
import Card from '../Card/Card'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CloudyTransition from '../CloudyTransition/CloudyTransition'

import { data } from '../../mockedData/data';

/*import photo from '../../assets/IMG-20230121-WA0000.jpg'*/


export default function Home() {
    return(
        <div className='Home Home_dimensions'>
            <Header />
            <Banner />
            <CloudyTransition />
            <div className='card-collection card-collection_border card-collection_gap'>
                {data.map((data) => 
                    <Card key={data.id} image={data.image} title={data.title} duration={data.running_time} rating={data.rt_score} />
                )}
            </div>
            <CloudyTransition />
            <Footer />
        </div>
    )
}

/*<CloudyTransition /> */