import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>




    
       
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <LinkContainer to='/'>
          
          <Navbar.Brand >Google Shop</Navbar.Brand>
          </LinkContainer>
         
          <Nav className="mg-auto">
            <LinkContainer to='/cart'>
            <Nav.Link > <i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link> <i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>
    
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}


    

export default Header