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
            <div className='main_wrap'>

                <Header/>
                <div className="carousel">
                    <Carousel/>
                </div>
                <div className="main_container">
                    <div className='Home'>

                            <div className="text">
                                <Text/>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>




        </>
    )
}

export default Home;
