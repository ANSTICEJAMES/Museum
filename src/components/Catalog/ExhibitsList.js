import React, { Component } from 'react';
import './ExhibitsList.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'
import Element from '../Catalog/Element'

export  class ExhibitsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exhibits: []
        }
    }
    



    componentDidMount() {
        this.getExhibits ();
        //this.getExhibits (this.props.uid);
        
    } 


    async getExhibits(uid) {
        //const exhibits = await axios.get(`${process.env.REACT_APP_API_URL}exhibits/${uid}`);
        const exhibits = await axios.get(`${process.env.REACT_APP_API_URL}/exhibits/?limit=6&offset=0&categories=5`);
        //const {name, description, categories, image} = exhibit.data.responseData;
        console.log('111111111111111',exhibits);

        this.setState({exhibits:exhibits.data.responseData}, ()=> console.log(this.state));
   
    }

    handleClick (e) {
        console.log("###################",e);
    }


    render() {

        return (
            <div className='Category'>
              <Header/>
              <div className="contentList">
        <div className="nameCategory"><h3>categories</h3></div>
                <ul className="grid-container"> 
                { 
                        this.state.exhibits.map(exhibit=>
                        {
                            return (
                                
                                <Element key={exhibit.uid} exhibit={exhibit} />
                            ) 
                        }
                    )
                }
                </ul>
              </div>
              <Footer/>
            </div>
        )
    
    }

}
export default ExhibitsList;