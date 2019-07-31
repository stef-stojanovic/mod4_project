import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'
import LoginPage from './containers/LoginPage'
import Orders from './components/AccountDetails/Orders'
import SignUp from './containers/SignUp'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {

    return (

      <React.Fragment>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Productlist}></Route>
            <Route exact path="/orders" component={Orders}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/register" component={SignUp}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal />
      </React.Fragment>
    );
  }
}

export default App;
