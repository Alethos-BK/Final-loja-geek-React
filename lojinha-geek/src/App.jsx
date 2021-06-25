import React, { useState } from 'react'
import './App.css'
import Categoria from './produto/categoria/Categoria'
import Home from "./Home"
import { Button, Navbar, NavDropdown, Container, Nav, FormControl, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Produto from './produto/Produto';

import Title from './Title';

import PostCliente from './cliente/PostCliente';

function App(props) {

  return (
    <>

    <Title />
    <BrowserRouter> 
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LOJINHA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link> <Link to="/Home">Inicio</Link></Nav.Link>
              <Nav.Link> <Link to="/produto/Produto">Produto</Link></Nav.Link>
              <Nav.Link> <Link to="/cliente/PostCliente">Registre-se</Link></Nav.Link>
              
              <NavDropdown title="Categoria" id="basic-nav-dropdown" >
                 <NavDropdown.Item> <Link to= "/produto/categoria/Categoria"> Categoria </Link></NavDropdown.Item>
              </NavDropdown> 
            </Nav>
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

            <Route path="/cliente/PostCliente" exact>
                <PostCliente/>
            </Route>

            <Route path={`/produto/GetProdutoPorNome`} exact>
              <Produto />
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

          



          {/* <NomePagina /> */}
      </>
      );
    
    }
    
    export default App;
      