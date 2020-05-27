import React from 'react'
import './Element.css'



function Element(props) {

    const {name,image} = props.exhibit;

      
        return (
            <li>
                <div className="card">
                    {/*<img className="card-img-top" alt="img" src={`${process.env.REACT_APP_API_URL}${image[0]}`}/>*/}
                    <img className="card-img-top" alt="img" src={`http://91.203.192.84:3000${image[0]}`}/>
                    <div className="card-body">
                        <h5 className="card-title"> {name}</h5>
                        {/*<a href="/exhibit/" className="btn btn-primary">Посмотреть экспонат</a>*/}
                    </div>
                </div>
            </li>
        )
    }

export default Element;