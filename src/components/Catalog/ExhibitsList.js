import React, {Component} from 'react';
import './ExhibitsList.css'
import queryString from 'query-string';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'
import Element from '../Catalog/Element'
import { Link } from "react-router-dom"


export class ExhibitsList extends Component {

    constructor(props) {
        super(props);


        this.state = {
            exhibits: [],
            query: props.location.search
        }

    }

    componentDidMount() {
        const {offset, categories} = queryString.parse(this.state.query)
        this.getExhibits(offset, categories);
    }

    async getExhibits(offset, categories) {
        const exhibits = await axios.get(`${process.env.REACT_APP_API_URL}/exhibits/?limit=6&offset=${offset}&categories=${categories}`);
        this.setState({exhibits: exhibits.data.responseData});
    }


    handleClick(uid) {

    }


    render() {
        const exhibits = this.state.exhibits

        return (
            <div className='Category'>
                <Header/>
                <div className="contentList">
                    <div className="nameCategory"><h3>categories</h3></div>
                    <ul className="grid-container">
                        {
                            exhibits ? exhibits.map(exhibit => {
                                return (
                                        <Link to={`/exhibit/${exhibit.uid}`} key={exhibit.uid}>
                                            <Element exhibit={exhibit} />
                                        </Link>
                                )
                            }) : (<li>Нет экспонатов</li>)
                        }
                    </ul>
                </div>
                <Footer/>
            </div>
        )

    }

}

export default ExhibitsList;