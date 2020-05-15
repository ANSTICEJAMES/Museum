import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Exhibit.css'
import logo from '../../images/exhibit/exhibit.png';
import { Link } from "react-router-dom"
import axios from 'axios'


class Exhibit extends Component {

  state={img:[]};

  componentDidMount() {
   this.getExhibit ();
   //this.getExhibit (this.props.uid);
   
  } 



 async getExhibit(uid) {
    //const exhibit = await axios.get(`${process.env.REACT_APP_API_URL}exhibits/${uid}`);
    const exhibit = await axios.get(`${process.env.REACT_APP_API_URL}exhibits/${99001}`);
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
            <img src={logo} className="news-img" alt = "logo"></img>
            <h5 className="news-text">ЭКСПОНАТЫ</h5>
          </div>
          <hr></hr>
        </div>
        <div className="namex"> <div className="namexx"><h4>Радиоприемник транзисторный "Соната"</h4></div></div>
        <div className="common">
          <div className="about"><h6>Радиоприемник транзисторный "Соната", переносной, четырехдиапазонный, 
            II класса, Корпус прямоугольной формы, черного цвета. Серийный заводской номер 898845. 
            Произведен в СССР Денинградским заводом "Радоиприбор". Цена на дату производства (1965г.)
            - 73р. 34к.
            <p> Кол-во экземпляров: 1</p>
            <p> Материал: пластик, металл</p>
            <p> Место нахождения: в тумбочке, в кладовой</p>
            <p> Примечание: в нерабочем состоянии на 23.04.2014г. Арх. 16т. 2</p>
            </h6></div>
          <div className="photo"> <img src={`${process.env.REACT_APP_API_URL}${this.state.img[1]}`} alt = "1" width="500" height="350" ></img>
          
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

