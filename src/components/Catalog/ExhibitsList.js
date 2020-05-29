import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios'
import './ExhibitsList.css'
import queryString from 'query-string';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Element from '../Catalog/Element'
import Loader from "../Other/Loader"
import words from "../../words"
import Pagination from "react-js-pagination";
import "./bootstrap.css"



export class ExhibitsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            exhibits: [],
            pageData: {
                countAllExhibits: null,
                countMaxPages: null,
                limit: null,
                offset: 0,
                categories: null
            },
            query: props.location.search,
        }
    }

    componentDidMount() {
        console.log("didMount")

        const {offset, categories} = queryString.parse(this.state.query)
        this.getExhibits(offset, categories,
            (exhibits) => this.setState({
                exhibits: exhibits.data.responseData,
                isLoading: true,
                pageData: {
                    countMaxPages: +exhibits.data.countMaxPages,
                    countAllExhibits: +exhibits.data.count,
                    limit: 8,
                    offset: +offset,
                    categories
                },
            }))
    }


    async getExhibits(offset, categories, cb) {
        const exhibits = await axios.get(`${process.env.REACT_APP_API_URL}/v1/exhibits/?limit=8&offset=${offset}&categories=${categories}`);
        cb(exhibits)
    };

    handlePageChange(pageNumber) {
        const {categories} = queryString.parse(this.state.query)
        this.getExhibits((pageNumber - 1), categories,
            (exhibits) => {

                this.setState({
                        exhibits: exhibits.data.responseData,
                        isLoading: true,
                        pageData: {
                            offset: pageNumber,
                            countAllExhibits: exhibits.data.count,
                            countMaxPages: exhibits.data.countMaxPages,
                            limit: 8,
                            categories


                        }
                    }
                )
                console.log(exhibits)
            }
        )
    }


    render() {

        const {exhibits, isLoading, pageData} = this.state;

        return (

            <div className='main_wrap'>
                    <Header/>
                <div className="nameCategory"><h3>{words[pageData.categories]}</h3></div>

                <div className="main_container">
                {isLoading ?
                        <div className="contentList">
                            <ul className="grid-container">

                                {
                                    exhibits.length ? exhibits.map(exhibit => {
                                        return (
                                            <Link to={`/exhibit/${exhibit.uid}`} key={exhibit.uid}>
                                                <Element exhibit={exhibit}/>
                                            </Link>
                                        )
                                    }) : (<li>Нет экспонатов</li>)
                                }


                            </ul>
                            {exhibits.length ? <Pagination
                                activePage={this.state.pageData.offset}
                                itemsCountPerPage={this.state.pageData.limit}
                                totalItemsCount={this.state.pageData.countAllExhibits}
                                onChange={this.handlePageChange.bind(this)}
                            /> : ''}

                        </div>

                        : <Loader/>}
                </div>

                <Footer/>

            </div>
        )

    }
}

export default ExhibitsList;