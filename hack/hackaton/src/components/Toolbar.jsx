import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


export default function Toolbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Главная</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Жанры</Nav.Link>
                <Nav.Link href="#features">Прайс-лист</Nav.Link>
                <Nav.Link href="#pricing">Продукция</Nav.Link>
                <Nav.Link href="#pricing">О фирме</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}