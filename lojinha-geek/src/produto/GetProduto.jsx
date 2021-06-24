import React, { useEffect, useState }  from 'react';
import axios from 'axios'

function GetProduto(){

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
			console.log(response.status)
			setProduto(response.data)
		});
	}

    // const obterNomeCategoria = (prod) => {
    //     let guardarCategoria =  categoria.find((categ) => categ.id == prod.id )

    //     return guardarCategoria ? guardarCategoria.nome : "Produto sem categoria";
        
    //     }

    // const handleConsulta = () => {
    //     obterTodososProdutos();
    //     obterTodasAsCategorias();
    // }

	return (
		<>
		  <h1>Obter todos os produtos</h1>
			<button onClick={obterTodososProdutos}> Produtos</button>
			{produto.map((prod) => (
				<p key={prod.id}> 
                Nome: {prod.nome} 
                Descricão: {prod.descricao}
                Preço: R${prod.preco} 
                Estoque: {prod.estoque} 
                Data de cadastro: {prod.dataDeCadastro} 
                Categoria: { prod.categoria ? prod.categoria.nome : "Produto sem categoria"}
                </p>
			))}
		</>
	)
}

export default GetProduto;