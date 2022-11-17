import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
           
           <Navbar bg="light" expand="lg">
      <Container>
        <Link to='/' className='fw-bold text-decoration-none text-dark fs-3'>SETSKILL</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to='/' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Home</Link>
          <Link to='/blogs' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Blogs</Link>

          <Link to='/courses' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Courses</Link>
          <Link to='/FAQ' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>FAQ</Link>
          <Link to='/login' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Login</Link>
          <Link to='/signup' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Sign In</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </div>
    );
};

export default Header;