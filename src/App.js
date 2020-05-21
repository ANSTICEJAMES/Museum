import React, { Component } from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home'
import News from './components/News/News'
import Catalog from './components/Catalog/Catalog'
import ExhibitRoute from './components/Exhibit/ExhibitRoute'


class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route exact history={history} path='/' component={Home} />
          <Route history={history} path='/news' component={News} />
          <Route history={history} path='/catalog' component={Catalog} />
          <Route history={history} strict path='/exhibit' component={ExhibitRoute} />

          <Route history={history} path='*' children={()=><h2>Not found <Link to="/">Домой</Link></h2>  } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
