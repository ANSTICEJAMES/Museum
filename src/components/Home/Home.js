import React from 'react';
//import logo from './logo.svg';
import './Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import Text from './Text';


function Home() {
    return (
        <>
            <Header/>

            <div className='Home'>
                <div className="content">
                    <div className="carousel">
                        <Carousel/>
                    </div>
                    <div className="text">
                        <Text/>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Home;
