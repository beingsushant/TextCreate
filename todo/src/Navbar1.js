import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar1.css';
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,

} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar1() {
    return (
        <div>
            <Navbar id="navbar" bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TextEditor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About Us</Link>
                            </li>
                            <ul title="Menu" >
                                <li>
                                    <Link to="/Career">Career</Link>
                                </li>
                                <li>
                                    <Link to="/Contact">Contact Us</Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1