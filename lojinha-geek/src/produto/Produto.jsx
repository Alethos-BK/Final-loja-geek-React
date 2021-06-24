import React from 'react';
import GetProduto from './GetProduto';
import GetProdutoPorId from './GetProdutoPorId';
import PostProduto from './PostProduto';
import GetProdutoPorCategoria from './GetProdutoPorCategoria';

function Produto(){
  return(
    <>  
      <GetProduto/>
      {/* <GetProdutoPorId/> */}
      <PostProduto/>
      <GetProdutoPorCategoria/>
    </>

  )
}

export default Produto;