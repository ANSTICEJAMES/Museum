import React, {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import logo from './exhibit.png'
import {Link} from "react-router-dom"
import axios from 'axios'
import '../Catalog/ExhibitsList'
import './Exhibit.css'
import notphoto from './notphoto.png'
import Loader from "../Other/Loader"

import sss from './sonata.jpg'
import www from '../../images/home/0.jpg'


class Exhibit extends Component {


    constructor(props) {
        super(props);
        this.state = {
            exhibit: {},
            params: props.match.params,
            isLoading: false,


        }
    }


    componentDidMount() {
        const {uid} = this.state.params;
        this.getExhibit(uid, (exhibit) => {
            this.setState({exhibit: exhibit.data.responseData, isLoading: true});
        });


    }


    async getExhibit(uid, cb) {

        const exhibit = await axios.get(`${process.env.REACT_APP_API_URL}/exhibits/${uid}`);
        cb(exhibit);
    }

    // Carousel() {
    //     return (
    //       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3500">
    //     <ol className="carousel-indicators">
    //       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    //       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //     </ol>
    //     <div className="carousel-inner">
    //
    //       <div className="carousel-item active">
    //       <img class="d-block w-100 " src={sss} alt="Первый слайд"/>
    //
    //       </div>
    //
    //       <div className="carousel-item">
    //       <img class="d-block w-100 " src={notphoto} alt="Второй слайд"/>
    //       </div>
    //
    //       <div className="carousel-item">
    //       <img class="d-block w-100 " src={www} alt="Второй слайд"/>
    //       </div>
    //
    //     </div>
    //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    //     );
    //   }


    render() {
        const {name, description, categories, image} = this.state.exhibit;
        const {isLoading} = this.state;

        return (
            <>
                <Header/>
                <div className='Exhibit'>

                    {isLoading ?

                        <div className="contentExhibit">

                            <div className="left">
                                <div className="nameplate">
                                    <img src={logo} alt="exhibits" className="news-img"/>
                                    <h5 className="news-text">ЭКСПОНАТ</h5>
                                </div>
                                <div className="namex">
                                    <div className="namexx"><h4>{name}</h4></div>
                                </div>
                                <div className="common">
                                    <div className="about"><h6>
                                        Описание экспоната
                                    </h6>
                                        {description}
                                    </div>

                                </div>

                            </div>
                            <div className="right">
                                <div className="photo">

                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
                                        // data-interval="3500"
                                    >
                                        <ul className="carousel-inner">
                                            {
                                                image ? image.map((img, i) => {
                                                        if (!i) return (
                                                            <li className="carousel-item active" key={i}>
                                                                <img src={`${process.env.REACT_APP_API_URL}/${img}`}
                                                                     alt="exhibit" className="d-block w-100"/>
                                                            </li>
                                                        )
                                                        else return (
                                                            <li className="carousel-item" key={i}>
                                                                <img src={`${process.env.REACT_APP_API_URL}/${img}`}
                                                                     alt="exhibit" className="d-block w-100"/>
                                                            </li>
                                                        )
                                                    }
                                                ) : (<div className="carousel-item">
                                                    <img src={notphoto} alt="exhibit" className="d-block w-100"/>
                                                </div>)
                                            }

                                        </ul>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators"
                                           role="button"
                                           data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators"
                                           role="button"
                                           data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="back">
                                    <Link to={`/exhibit/exhibitslist/?limit=10&offset=0&categories=${categories}`}
                                          className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Вернуться
                                        назад</Link>
                                </div>
                            </div>

                        </div>

                        : <Loader/>}
                </div>
                <Footer/>

            </>
        )
    }
}

export default Exhibit;
