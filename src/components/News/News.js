import './News.css'
import ph3 from './photo3.png';
import Text from './Text1.js';
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'


function News() {
    return (
        <>
            <div className='main_wrap'>
                <Header/>
                <div className="main_container">


                            <div className="news_main_wrap">
                                <div className="card-news-body">
                                    <img src={ph3} className="news-img" alt="иконка новости"></img>
                                    <h5 className="news-text">НОВОСТИ</h5>
                                </div>
                                <Text/>
                            </div>

                </div>
            </div>


            <Footer/>

        </>

    )
}

export default News;
serviceWorker.unregister();
