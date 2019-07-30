import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src='favicon.ico' alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5"></li>
                   <Link to="/" className="nav-link">
                   products
                   </Link> 
                   <Link to="/orders" className="nav-link">
                   My Account
                   </Link> 
                   <Link to="/login" className="nav-link" onClick={()=> {
                       localStorage.clear()
                   }}>
                   Log Out
                   </Link> 
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-2" >
                        <i className="fas fa-cart-plus" />   
                        my cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue) ;
    .nav-link {
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`
