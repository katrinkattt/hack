import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


export default function Toolbar() {
    return (
        <Navbar className="nav__bar" bg="primary" variant="dark">
            <Navbar.Brand href="#home">ЭКСМО Санкт-Петербург</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#janr">Жанры</Nav.Link>
                <Nav.Link href="#price">Прайс-лист</Nav.Link>
                <Nav.Link href="#product">Продукция</Nav.Link>
                <Nav.Link href="#about">О фирме</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Поиск</Button>
            </Form>
        </Navbar>
    )
}