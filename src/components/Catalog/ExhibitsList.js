import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller';
import './ExhibitsList.css'
import queryString from 'query-string';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Element from '../Catalog/Element'
import Loader from "../Other/Loader"
import words from "../../words"

export class ExhibitsList extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isLoading: false,
            exhibits: [],
            query: props.location.search
        }

    }

     componentDidMount() {
        const {offset, categories} = queryString.parse(this.state.query)
        this.getExhibits(offset, categories,
            (exhibits)=>this.setState({exhibits: exhibits.data.responseData, isLoading: true, query:{offset, categories}}) )

    }

    async getExhibits(offset, categories, cb) {
        // const exhibits = await axios.get(`${process.env.REACT_APP_API_URL}/v1/exhibits/?limit=8&offset=${offset}&categories=${categories}`);
        const exhibits = await axios.get(`http://91.203.192.84:3000/v1/exhibits/?limit=8&offset=${offset}&categories=${categories}`);
        cb(exhibits)
    };




    render() {

        const {exhibits, isLoading, query} = this.state;

        return (

              <div className='Category'>

                  <Header/>
                  {isLoading ?
                  <div className="contentList">
                      <div className="nameCategory"><h3>{words[query.categories]}</h3></div>
                      <ul className="grid-container">

                              {
                                  exhibits ? exhibits.map(exhibit => {
                                      return (
                                          <Link to={`/exhibit/${exhibit.uid}`} key={exhibit.uid}>
                                              <Element exhibit={exhibit}/>
                                          </Link>
                                      )
                                  }) : (<li>Нет экспонатов</li>)
                              }




                      </ul>
                  </div>
                  : <Loader/>}
                  <Footer/>
              </div>
        )

    }
}

export default ExhibitsList;