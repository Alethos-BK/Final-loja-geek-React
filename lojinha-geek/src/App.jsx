import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Categoria from './produto/categoria/Categoria'

import Home from "./Home"
import Dropdown from 'react-bootstrap/Dropdown'
import { Button, Navbar, NavDropdown, Container, Nav, FormControl, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produto from './produto/Produto';

import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


function App() {

  return (
<>
<BrowserRouter> 
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">LOJINHA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link> <Link to="/Home">Inicio</Link></Nav.Link>
          <Nav.Link> <Link to="/Produtos">Produtos</Link></Nav.Link>
          

          <NavDropdown title="Categoria" id="basic-nav-dropdown">

            
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
   

    
    
    
        <Switch>
          <Route path="/Home" exact>
            <Home />
            
            
          </Route>
            
          <Route path="/Produtos" exact>
            <Produtos/>
            </Route>

            <Route path="/Categoria" exact>
            <Categoria/>

            </Route>
          
        </Switch>
      </BrowserRouter>


  </>
  );

}

export default App;
