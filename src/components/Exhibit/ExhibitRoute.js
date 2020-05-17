import React from 'react';
import { Route, Switch } from "react-router-dom"


import ExhibitsList from '../Catalog/ExhibitsList'
import Exhibit from './Exhibit'


const ExhibitRoute = () => (
    <Switch>
        <Route path='/exhibit/exhibitslist/' component={ExhibitsList}/>
            <Route strict path='/exhibit/:uid' component={Exhibit}/>
        <Route  path='*' children={()=><h2>Not found</h2>} />


    </Switch>
)

export default ExhibitRoute;
