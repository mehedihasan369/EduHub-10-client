import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
                  <Navbar collapseOnSelect className='' expand="lg" bg="info" variant="light">
            <Container>
            <Link to='/' className='fw-bold text-decoration-none text-dark fs-3'>EduHub</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link to='/' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Home</Link>
          <Link to='/blogs' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Blogs</Link>

          <Link to='/courses' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Courses</Link>
          <Link to='/FAQ' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>FAQ</Link>

            </Nav>
               <Nav>
               <Link >
                            {
                                user?.uid ?
                                    <>
                                        <Button variant="info" className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>{user?.displayName}</Button>
                                        <Button variant="info" className='ms-3 text-decoration-none fs-6 text-dark fw-semibold' onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                <Link to='/login' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>Login</Link>
               <Link to='/signup' className='ms-3 text-decoration-none fs-6 text-dark fw-semibold'>SignUp</Link>
                                    </>
                            }


                        </Link>
                <Link eventKey={2} >
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>

               </Nav>
               <div className='d-lg-none'>
               </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        </div>
    );
};

export default Header;