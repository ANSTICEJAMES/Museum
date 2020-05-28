import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Catalog1.css'
import * as serviceWorker from '../../serviceWorker';



function Catalog() {
  return (
    <div className="q">
   
    <Header/>
    <div className="contentCat">
    <main class="wrapper">
  <section class="title">
    <h1>Каталог экспонатов</h1>
  </section>
  <section class="breweries" id="breweries" >
    <ul>
      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/1.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            </div>
            <figcaption><h3>Награды</h3></figcaption>
        </figure>
      </li>
      
      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/2.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Фотографии</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/3.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Техника</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/122.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Типография</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/z002.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Компьютеры</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/z005.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Печатные машинки</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/z012.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Телевизоры</h3></figcaption>
        </figure>
      </li>
      
      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/z012.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Оружие</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure> 
          <div className="itemNews">
              <a href="/exhibit/exhibitslist/?limit=8&offset=0&categories=awards" className="knopka">
              <img src="/catalog/z027.jpg" alt="Several hands holding beer glasses" className="scale"></img>
              </a>
            
            </div>
            <figcaption><h3>Фото- и видеотехника</h3></figcaption>
        </figure>
      </li>

    </ul>
  </section>
</main>
</div>
<Footer/>

</div>
  )
}

export default Catalog;
serviceWorker.unregister();
