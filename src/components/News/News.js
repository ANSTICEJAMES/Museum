import './News.css'
import ph3 from './photo3.png';
import Text from './Text1.js';
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as serviceWorker from '../../serviceWorker'


function News() {
    return (
        <>        <Header/>
            <div className='News'>
                <div className="content">



                    <div className="card-news-body">
                        <img src={ph3} className="news-img" alt="иконка новости"></img>
                        <h5 className="news-text">НОВОСТИ</h5>
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

export default News;
serviceWorker.unregister();
