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
import Pedido from './pedido/Pedido';
import SimplePopover from './BotaoCarrinho';
import PostProduto from './produto/PostProduto';
import GetProdutoPorNome from './produto/GetProdutoPorNome';
import PostCategoria from "./Produto/categoria/PostCategoria";
import PutCategoria from "./Produto/categoria/PutCategoria";
import DeleteCategoria from "./Produto/categoria/DeleteCategoria";
// import Canecas from './Canecas';
// import Roupas from './Roupas';
// import Funkos from './Funkos';

//TODO:fazer uns alerta !!
function App() {

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

              <Nav.Link> <Link to="./pedido/Pedido">Pedido</Link></Nav.Link>
            </Nav>

          <SimplePopover/>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <Switch>
        <Route path="/Home" exact>
                <Home />
            </Route>

            <Route path="/PostProduto" exact>
                <PostProduto />
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

            <Route path="/produto/categoria/Categoria" exact>
                <Categoria/>
 
            </Route>

            <Route path="/produtopornome/" exact>
              <GetProdutoPorNome/>
            </Route>

            <Route path="/Adicionar"exact>
                <PostCategoria />
            </Route>

            <Route path="/Atualizar" exact>
                <PutCategoria />
            </Route>

            <Route path="/Apagar" exact>
                <DeleteCategoria />

            </Route>

            <Route path={`/produto/GetProdutoPorNome`} exact>
              <Produto />
            </Route>
               
       </Switch>
          </BrowserRouter>




          {/* <NomePagina /> */}
      </>

      );
    
    }
    
    export default App;
