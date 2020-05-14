import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home'
import News from './components/News/News'
import Catalog from './components/Catalog/Catalog'
import Exhibit from './components/Exhibit/Exhibit'
import Element from './components/Catalog/Element'
import ExhibitsList from './components/Catalog/ExhibitsList'

class App extends Component {

  
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/news' component={News} />
          <Route history={history} path='/catalog' component={Catalog} />
          <Route history={history} path='/exhibit' component={Exhibit} />
          <Route history={history} path='/element' component={Element} />
          <Route history={history} path='/exhibitslist' component={ExhibitsList} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
