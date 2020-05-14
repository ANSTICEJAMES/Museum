import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Exhibit.css'
import sonata from './sonata.jpg'
import logo from './exhibit.png';
import { Link } from "react-router-dom"
import axios from 'axios'
import  '../Catalog/ExhibitsList'


class Exhibit extends Component {


  constructor(props) {
    super(props);
    this.state = {
    uid: '',
    img:[],
    name: '',
    description: '',
    categories: ''
    }
  }



  componentDidMount() {
   this.getExhibit ();
   //this.getExhibit (this.props.uid);
   
  } 



 async getExhibit(uid) {
    //const exhibit = await axios.get(`${process.env.REACT_APP_API_URL}exhibits/${uid}`);
    const exhibit = await axios.get(`${process.env.REACT_APP_API_URL}/exhibits/${25}`);
    const {name, description, categories, image} = exhibit.data.responseData;
   console.log("ыыыыыыыыыыыыыыыыыыыыы", name, description, categories, image );
   this.setState({img:image.slice()},()=> console.log(this.state));
  }




 render () {

  return (
    <div className='Exhibit'>
      <Header/>
      <div className="content">
        <div className="nameplate">
          <div className="card-news-body">
            <img src={logo} className="news-img"></img>
            <h5 className="news-text">ЭКСПОНАТЫ</h5>
          </div>
          <hr></hr>
        </div>
        <div className="namex"> <div className="namexx"><h4>{this.state.name}</h4></div></div>
        <div className="common">
          <div className="about"><h6>
            
            </h6></div>
          <div className="photo"> <img src={`${process.env.REACT_APP_API_URL}/${this.state.img[0]}`} width="500" height="350" ></img>
          
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

