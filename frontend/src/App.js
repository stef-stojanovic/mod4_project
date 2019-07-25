import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Productlist}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
      </React.Fragment>
   
    );
  }
}

export default App;
