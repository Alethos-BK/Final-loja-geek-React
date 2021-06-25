import React, { useState } from 'react'
import './App.css'
import Categoria from './produto/categoria/Categoria'
import Home from "./Home"
import { Button, Navbar, NavDropdown, Container, Nav, FormControl, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Produto from './produto/Produto';

import Cliente from './cliente/Cliente';

import GetClientePorId from './cliente/GetClientePorId';
import GetProdutoPorCategoria from './produto/GetProdutoPorCategoria';
// import Canecas from './Canecas';
// import Roupas from './Roupas';
// import Funkos from './Funkos';

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
              <Nav.Link> <Link to="./produto/Produto">Produto</Link></Nav.Link>
              <Nav.Link> <Link to="./cliente/Cliente">Cliente</Link></Nav.Link>
              
              <NavDropdown title="Categoria" id="basic-nav-dropdown" >
                 <NavDropdown.Item> <Link to= "/produto/categoria/Categoria"> Categoria </Link></NavDropdown.Item>
                
              </NavDropdown> 
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
            <Button variant="outline-success">ENTER</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        
        
        <Switch>
              <Route path="/Home" exact>
                <Home />
            </Route>
                
              <Route path="/produto/Produto" exact>
                <Produto/>
             </Route>
    
                <Route path="/produto/categoria/Categoria" exact>
                <Categoria/>
            </Route>
{/*     
             <Route path="/Canecas" exact>
                <Canecas/>
            </Route>
    
            <Route path="/Roupas" exact>
                <Roupas/>
            </Route>
    
            <Route path="/Funkos" exact>
                <Funkos/> */}
            {/* </Route> */}
               
       </Switch>
          </BrowserRouter>
                <Cliente />
          
      </>
      );
    
    }
    
    export default App;
      