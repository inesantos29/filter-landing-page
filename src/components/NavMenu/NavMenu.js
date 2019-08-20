import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import './style.css';

function NavMenu() {
    return (
        <Navbar className="flex-column flex-md-row align-items-center p-3 px-md-4" expand="lg">
            <Navbar.Brand className="mr-md-auto" href="#home">Tutormatch</Navbar.Brand>
            <Nav>
                <Nav.Item className="mr-3">
                    <Nav.Link>Become a Tutor</Nav.Link>
                </Nav.Item>
            </Nav>
            <Button className="pl-4 pr-4" variant="outline-dark">Sign in</Button>
        </Navbar>
    );
}

export default NavMenu;

