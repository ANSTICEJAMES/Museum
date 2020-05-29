import React from 'react'
import './Element.css'



function Element(props) {

    const { name, image } = props.exhibit;


    return (
        <li>
            <figure>
          
                <img alt="img" src={`${process.env.REACT_APP_API_URL}${image[0]}`} />
                <figcaption><h5> {name}</h5></figcaption>
               
            </figure>
           
            
        </li>
    )
}

export default Element;