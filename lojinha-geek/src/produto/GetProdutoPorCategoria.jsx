import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Carrinho from '../pedido/Carrinho';

function GetProdutoPorCategoria(props){

    const [ produto, setProduto] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [categoriaId, setCategoriaId] = useState('');
    
    const obterTodasAsCategorias = () => {
        axios.get(`http://localhost:8080/api/categorias/`).then((response) =>{
          console.log(response.status)
          setCategoria(response.data)
          
          });
    }
    useEffect(obterTodasAsCategorias, [])

    const obterTodososProdutosDaCategoria = () => {
		axios.get(`http://localhost:8080/api/produtos/idcategoria/${categoriaId}`).then((response) =>{
			console.log(response.status)
			setProduto(response.data)

      
		});
	}
 

    return (

      //mapeie categoria e escreva categorias
    <>

      {/* {categoria.map((categ) => (
        categ.nome


      ))} */}

    <select value={categoriaId}   name="select" onChange={(e) => setCategoriaId(e.currentTarget.value)}>
                
        {categoria.map((categ) =>
        {
        return(
          ( <option key= {categ.id} value= {categ.id}  selected> Categoria: {categ.nome}"</option> )
       
        )
        }        
        )}

        
    </select>
      <button onClick={obterTodososProdutosDaCategoria}>Categoria</button>


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
          <h6>Categoria: { prod.categoria ? prod.categoria.nome : "Produto sem categoria"}</h6>
          <img src={prod.imagem} alt={prod.nome} />
          <h4>R${prod.preco}</h4>
          Data de cadastro: {prod.dataDeCadastro} 

          <Carrinho id={prod.id}/>
          </div>
			))}

  </>
    )

       
    
}

export default GetProdutoPorCategoria;