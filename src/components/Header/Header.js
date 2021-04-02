import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand> <img id='logo' src={logo} alt=''></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-style">

                        <Nav.Link className="nav-style" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav-style" as={Link} to="/oder">Oder</Nav.Link>
                        <Nav.Link className="nav-style" as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link className="nav-style" as={Link} to="/deals">Deals</Nav.Link>
                        <Nav.Link id="login-btn" className="nav-style" as={Link} to="/login"> <FontAwesomeIcon icon={faUserShield} /> Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;