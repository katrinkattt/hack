import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardBook(props) {
    return (
        <div className="small-block">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{height: '8rem', padding: '0 60px 0 60px'}} src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <div style={{fontWeight: 'bold'}}>{props.autor}</div>
                        {props.about},
                        
                    </Card.Text>
                    <Button variant="primary">Подробнее</Button>
                </Card.Body>
            </Card>
        </div>
    )
}