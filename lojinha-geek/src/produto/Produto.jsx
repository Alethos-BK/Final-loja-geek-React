import React from 'react';
import GetProduto from './GetProduto';
import GetProdutoPorCategoria from './GetProdutoPorCategoria';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Produto() {

  const Botao = styled.button`
    display: inline-block;
    padding: 5px 5px;
    font-size: 11px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    box-shadow: 0 9px #999;
    margin-left: 90%
  `


  return (
    <>
      <Link to="/PostProduto"><Botao>Cadastrar Produto</Botao></Link>
      <GetProdutoPorCategoria/>

      <h1>----------------------------------------------------------------------------------------------------</h1>
      <GetProduto />


    </>

  )
}

export default Produto;