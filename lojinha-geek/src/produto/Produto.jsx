import React from 'react';
import GetProduto from './GetProduto';
import GetProdutoPorId from './GetProdutoPorId';
import PostProduto from './PostProduto';
import GetProdutoNome from './GetProdutoPorNome';
import { Link } from 'react-router-dom';


function Produto(){
  return(
    <>  
    <Link to="/PostProduto"><button>Cadastrar Produto</button></Link>
      <GetProdutoNome />
      <GetProduto />

      {/* <GetProdutoPorId /> */}

      {/* <PostProduto /> */}

      
    </>

  )
}

export default Produto;