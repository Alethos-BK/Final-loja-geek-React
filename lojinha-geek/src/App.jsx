import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Categoria from './produto/categoria/Categoria'

import Home from "./Home"
import Dropdown from 'react-bootstrap/Dropdown'
import { Button, Navbar, NavDropdown, Container, Nav, FormControl, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produto from './produto/Produto';


function App() {

  return (
<>
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">LOJINHA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Produtos</Nav.Link>
          <NavDropdown title="Categoria" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Roupas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Jogos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
        <Button variant="outline-success">ENTER</Button>
      </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    <Home />
    <Categoria />
    <Produto />
  </>
  );

}

export default App;
