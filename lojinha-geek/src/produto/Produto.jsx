import React from 'react';
import GetProduto from './GetProduto';
import GetProdutoPorId from './GetProdutoPorId';
import PostProduto from './PostProduto';
import GetProdutoNome from './GetProdutoPorNome';

function Produto(){
  return(
    <>  
      <GetProdutoNome />
      <GetProduto />

      {/* <GetProdutoPorId /> */}

      {/* <PostProduto /> */}

      
    </>

  )
}

export default Produto;