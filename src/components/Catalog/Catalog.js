import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Katalog from './catcontent.js';
import './Catalog1.css';
import * as serviceWorker from '../../serviceWorker';

import { Link } from "react-router-dom"





function Catalog () {
    return (
      <div className='Catalog_stile'>
        <Header/>
        <div className = 'content'>
          <Katalog/>
        </div>
        <Footer/>
      </div>
    )
}

export default Catalog;
serviceWorker.unregister();
