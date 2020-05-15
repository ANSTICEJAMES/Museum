import './News.css'
import ph3 from './photo3.png';
import Carousel from './Carousel.js';
import Text from './Text1.js';
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'







function News () {
    return (
      <div className='News'>
        <Header/>
            <div className="content">

                <div className="carousel">
                    <Carousel />
                </div>
                
                <div className="card-news-body">
                    <img src={ph3} className="news-img" alt="иконка новости"></img>
                    <h5 className="news-text">НОВОСТИ</h5>
                </div>
                <hr></hr>

                <div className="text">
                    <Text />
                </div>
      
        </div>
        <Footer/>
      </div>
    )
}

export default News;
serviceWorker.unregister();
