import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import logo from './exhibit.png'
import { Link } from "react-router-dom"
import axios from 'axios'
import  '../Catalog/ExhibitsList'
import  './Exhibit.css'


class Exhibit extends Component {


  constructor(props) {
    super(props);
    this.state = {
        exhibit:{},
        params: props.match.params


    }
  }



  componentDidMount() {
      const {uid} = this.state.params;
      this.getExhibit (uid);

  } 



 async getExhibit(uid) {
    const exhibit = await axios.get(`${process.env.REACT_APP_API_URL}/exhibits/${uid}`);
    const {name, description, categories, image} = exhibit.data.responseData;
   this.setState({exhibit : exhibit.data.responseData });
  }




 render () {
     const {name, description, categories, image} = this.state.exhibit;
     console.log(image)

     return (
    <div className='Exhibit'>
      <Header/>
      <div className="contentExhibit">
        <div className="nameplate">
          <div className="card-news-body">
            <img src={logo} alt="exhibits" className="news-img"/>
            <h5 className="news-text">ЭКСПОНАТ</h5>
          </div>
          <hr></hr>
        </div>
        <div className="namex"> <div className="namexx"><h4>{name}</h4></div></div>
        <div className="common">
          <div className="about"><h6>
            Описание экспоната
            </h6>
          <p>{description}</p></div>
          <div className="photo">
              <img src={`${process.env.REACT_APP_API_URL}/${image}`} alt="exhibits" width="500" height="350" />
          </div>
        </div>
        <div className="back">
            <Link to ="/catalog" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Вернуться назад</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
 }
}
export default Exhibit;
