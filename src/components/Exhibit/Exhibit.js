import React, {Component} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import logo from './exhibit.png'
import {Link} from "react-router-dom"
import axios from 'axios'
import '../Catalog/ExhibitsList'
import './Exhibit.css'
import notphoto from './notphoto.png'
import Loader from "../Other/Loader"


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


    render() {
        const {name, description, categories, image} = this.state.exhibit;
        const {isLoading} = this.state;

        return (
            <div className='Exhibit'>
                <Header/>
                {isLoading ?
                    <div className="contentExhibit">
                        <div className="nameplate">
                            <div className="card-news-body">
                                <img src={logo} alt="exhibits" className="news-img"/>
                                <h5 className="news-text">ЭКСПОНАТ</h5>
                            </div>
                            <hr></hr>
                        </div>
                        <div className="namex">
                            <div className="namexx"><h4>{name}</h4></div>
                        </div>
                        <div className="common">
                            <div className="about"><h6>
                                Описание экспоната
                            </h6>
                                <p>{description}</p></div>
                            <div className="photo">

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
                                     data-interval="3500">
                                    <div className="carousel-inner">
                                        {
                                            image ? image.map((img, i) => {
                                                    return (
                                                        <div className="carousel-item" key={i}>
                                                            <img src={`${process.env.REACT_APP_API_URL}/${img}`} alt="exhibit" className="d-block w-100"/>
                                                        </div>
                                                    )
                                                }
                                            ) : (<div className="carousel-item">
                                                <img src={notphoto} alt="exhibit" className="d-block w-100"/>
                                            </div>)
                                        }

                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>


                                {/* <img src={`${process.env.REACT_APP_API_URL}/${image}`} alt="exhibits" width="500" height="350" /> */}
                            </div>
                        </div>
                        <div className="back">
                            <Link to={`/exhibit/exhibitslist/?limit=10&offset=0&categories=${categories}`}
                                  className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Вернуться
                                назад</Link>
                        </div>
                    </div>
                    : <Loader/>}
                <Footer/>
            </div>
        )
    }
}

export default Exhibit;
