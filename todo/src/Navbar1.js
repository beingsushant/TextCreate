import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar1.css';
import PropTypes from 'prop-types';
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form

} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar1(props) {
    return (
        <div>
            <Navbar id="navbar" bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TextEditor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav >
                            <li className="list">
                                <Link className="list" to="/home">Home</Link>
                            </li>
                            <li className="list">
                                <Link className="list" to="/About">About Us</Link>
                            </li>
                            <li className="list">
                                <Link className="list" to="/Career">Career</Link>
                            </li>
                            <li className="list">
                                <Link className="list" to="/Contact">Contact Us</Link>
                            </li>
                            <li className="list">
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label={props.mode==='light'?'dark':'light'}
                                        onClick={props.toggleMode}
                                    />
                                </Form>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1