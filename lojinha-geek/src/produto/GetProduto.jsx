import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Carrinho from '../pedido/Carrinho';

function GetProduto() {

  const [produto, setProduto] = useState([]);

  const [categoria, setCategoria] = useState([]);

  //   const obterTodasAsCategorias = () => {
  // 		axios.get(`http://localhost:8080/api/categorias`).then((response) =>{
  // 			console.log(response.status)
  // 			setCategoria(response.data)
  // 		});
  // 	}


  const obterTodososProdutos = () => {

		axios.get(`http://localhost:8080/api/produtos`).then((response) =>{
			setProduto(response.data)
		});
	}
 


  React.useEffect(obterTodososProdutos, [])

  // const obterNomeCategoria = (prod) => {
  //     let guardarCategoria =  categoria.find((categ) => categ.id == prod.id )

  //     return guardarCategoria ? guardarCategoria.nome : "Produto sem categoria";

  //     }

  // const handleConsulta = () => {
  //     obterTodososProdutos();
  //     obterTodasAsCategorias();
  // }

  return (
    <container>

      <h1 style={{ textAlign: "center", fontFamily: "Roboto" }}>Produtos</h1>
      {/* <button onClick={obterTodososProdutos}> Produtos</button> */}
      {produto.map((prod) => (
        <div key={prod.id} style={{
          border: "1px solid black",
          textAlign: "center",
          marginTop: "10px"
        }}> 
        
          <h3>{prod.nome}</h3> 
          <h1>Id {prod.id}</h1>
          Descricão: {prod.descricao}
          <h6>Em stoque:{prod.estoque}</h6>
          <h6>Categoria: {prod.categoria ? prod.categoria.nome : "Produto sem categoria"}</h6>
          <img src={prod.imagem} alt={prod.nome} />
          <h4>R${prod.preco}</h4>
          <h4>Data de cadastro: {prod.dataDeCadastro}</h4>
        </div>
			))}
		</container>
	)
}
export default GetProduto;