import React, { useState } from 'react';
import axios from 'axios';

function GetProdutoPorNome(props) {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('blusa');

    const obterProduto = () => {
        axios.get(`http://localhost:8080/api/produtos/${nome}`).then((response) => {
            setProdutos(response.data)
            console.log(response.data)
        })
    }

    const handleChange = (e) => setNome(e.target.value)
    return (
        <>
		  <h1 style={{textAlign: "center"}}>Obter produto por nome</h1>
			{/* <button onClick={obterTodososProdutos}> Produtos</button> */}
			{produtos.map((prod) => (
				<div key={prod.id} style={{
          border: "1px solid black",
          textAlign: "center",
          marginTop: "10px"
        }}> 
          <h3>{prod.nome}</h3> 
          Descricão: {prod.descricao}
          <h6>Em stoque:{prod.estoque}</h6> 
          <h6>Categoria: { prod.categoria ? prod.categoria.nome : "Produto sem categoria"}</h6>
          <img src={prod.imagem} alt={prod.nome} />
          <h4>R${prod.preco}</h4>
          Data de cadastro: {prod.dataDeCadastro} 
          </div>
			))}
	
        </>
    );
    //TODO: PRODUTO POR ID
    
}

export default GetProdutoPorNome;