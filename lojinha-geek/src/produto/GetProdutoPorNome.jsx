import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetProdutoPorNome(props) {


    const [produto, setProduto] = useState('');
    const [produtos, setProdutos] = useState([]);

    const obterProduto = () => {    
        axios.get(`http://localhost:8080/api/produtos/nome/${produto}`).then((response) => {
            setProdutos(response.data)
            console.log(produtos)
            
        })
    }

    const handleChange = (e) => {
        setProduto(e.target.value)
        console.log(produto)
    
    }
    return (
        <>
		  <h1 style={{textAlign: "center"}}>Obter todos os produtos</h1>
          <input type="text" onChange={handleChange}></input>
          <button onClick={obterProduto} value={produto} >Pesquisar</button>

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

    
}

export default GetProdutoPorNome;