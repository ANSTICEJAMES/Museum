import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Katalog from './catcontent.js'
import './Catalog1.css'
import * as serviceWorker from '../../serviceWorker';


function Catalog() {
  return (
    <div>
      <Header />
      <div className="contentCat">
        <div className="page_title"> <h1>Каталог экспонатов</h1></div>
        <div className="gridnews blok">

          <div className="itemNews">
            <a href="https://sfedu.ru/" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title">
                    <p>Награды</p>
                  </div>
                </div>
                <div className="child bg-1"></div>
              </div>
            </a>
          </div>

          <div className="itemNews">
            <a href="https://sfedu.ru/" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title">
                    <p>Фото</p>
                  </div>
                </div>
                <div className="child bg-2"></div>
              </div>
            </a>
          </div>


          <div href="https://sfedu.ru/" className="knopka itemNews">
            <div className="vozm">
              <div className="vposf">
                <div className="blok_title"> <p>Техника</p></div>
              </div>
              <div className="child bg-3"></div>
            </div>
          </div>

          <div className="itemNews">
            <a href="https://sfedu.ru/" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title"> <p>Типография</p></div>
                </div>
                <div className="child bg-4"></div>
              </div>
            </a>
          </div>

          <div className="itemNews">
            <a href="http://localhost:3000/news" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title"><p>Компьютеры</p></div>
                </div>
                <div className="child bg-5"></div>
              </div>
            </a>
          </div>

          <div className="itemNews">
            <a href="http://localhost:3000/news" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title"><p>Печатные машинки</p></div>
                </div>
                <div className="child bg-6"></div>
              </div>
            </a>
          </div>


          <div className="itemNews">
            <a href="http://localhost:3000/news" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title"> <p>Телевизоры</p></div>
                </div>
                <div className="child bg-7"></div>
              </div>
            </a>
          </div>

          <div className="itemNews">
            <a href="http://localhost:3000/news" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title">
                    <p>Оружие</p>
                  </div>
                </div>
                <div className="child bg-8">
                </div>
              </div>
            </a>
          </div>


          <div className="itemNews">
            <a href="http://localhost:3000/news" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title">
                    <p>Фото и видео техника</p>
                  </div>
                </div>
                <div className="child bg-9">
                </div>
              </div>
            </a>
          </div>


          <div className="itemNews">
            <a href="http://localhost:3000/news" className="knopka">
              <div className="vozm">
                <div className="vposf">
                  <div className="blok_title">
                    <p>Прочее</p>
                  </div>
                </div>
                <div className="child bg-9">
                </div>
              </div>
            </a>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Catalog;
serviceWorker.unregister();
