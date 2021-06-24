import React from 'react';
import GetProduto from './GetProduto';
import GetProdutoPorId from './GetProdutoPorId';
import PostProduto from './PostProduto';

function Produto(){
  return(
    <>  
      <GetProduto/>
      {/* <GetProdutoPorId/> */}
      <PostProduto/>
    </>

  )
}

export default Produto;