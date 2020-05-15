import React, { Component } from 'react';
import './Element.css'

function Element(props) {

    const {name, description, categories, image} = props.exhibit;
    
      
    console.log("ssssss", name, description, categories, image);
        return (
            <li>
                <div className="card">
                    <img className="card-img-top" src={`${process.env.REACT_APP_API_URL}/${image[0]}`}></img> 
                    <div class="card-body">
                        <h5 class="card-title"> {name}</h5> 
                        <a href="/exhibit/" class="btn btn-primary">Посмотреть экспонат</a>
                    </div>
                </div>
            </li>    
        )
    }

export default Element;