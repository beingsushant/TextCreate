import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './App.css'
import './logo.svg'

function Contact() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./logo.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="aboutcontent">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Contact