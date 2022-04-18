import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        // header Parts
        <div className="container">
            <Navbar  collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                        Dr. Shahnewaj Nomi                   </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <Link to="/home">
                                <button type="button" className="btn btn-outline-light mx-2">Home</button>
                            </Link>
                            <Link to="/services">
                                <button type="button" className="btn btn-outline-light mx-2">Services</button>
                            </Link>
                            <Link to="/checkout">
                                <button type="button" className="btn btn-outline-light mx-2">Checkout</button>
                            </Link>
                            <Link to="/about">
                                <button type="button" className="btn btn-outline-light mx-2">About Me</button>
                            </Link>

                        </Nav>
                        {user?.email ?

                            <button onClick={logOut} type="button" className="btn btn-outline-light ">Logout</button> :

                            <Link to="/login">
                                <button type="button" className="btn btn-outline-light ">Login</button>
                            </Link>
                        }
                        <Link to="/register">
                            <button type="button" className="btn btn-outline-light mx-2">SignUp</button>
                        </Link>
                        <Navbar.Text>
                            <span className="text-white">Signed in as:</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;