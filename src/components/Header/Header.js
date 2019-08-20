import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import './style.css';

function Header() {
    return (
        <Jumbotron className="bg-grey text-center">
            <h1>The place where Tutors and Students meet</h1>
            <p className="mb-4">
                Find out who can help you take your education to the next level.
            </p>
            <Button variant="success">Get started now</Button>
        </Jumbotron>
    );
}

export default Header;
