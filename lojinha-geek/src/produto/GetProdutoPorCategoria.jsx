import React, { useEffect, useState } from 'react';
import axios from 'axios'

function GetProdutoPorCategoria(props){

    const [ produto, setProduto] = useState({});
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

        <select value=""   name="select" onChange={(e) => setCategoriaId(e.currentTarget.value)}>
                
        {categoria.map((categ) =>
        {
        return(
          ( <option key= {categ.id} value= {categ.id}  selected> Categoria: {categ.nome}"</option> )
       
        )
        }        
        )}

        
    </select>
      <button onClick={obterTodososProdutosDaCategoria}>Categoria</button>



  	  {produto.map((p) => (<p>a</p>))}

    {/* {produto.map((prod) => (
				<p key={prod.id}> 
                Nome: {prod.nome} 
                Descricão: {prod.descricao}
                Preço: R${prod.preco} 
                Estoque: {prod.estoque} 
                Data de cadastro: {prod.dataDeCadastro} 
                Categoria: { prod.categoria ? prod.categoria.nome : "Produto sem categoria"}
                </p>
			))} */}

  </>
    )

       
    
}

export default GetProdutoPorCategoria;