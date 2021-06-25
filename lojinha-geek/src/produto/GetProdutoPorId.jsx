import React, { useState } from 'react';
import axios from 'axios';

function GetProdutoPorId() {

    const [produto, setProduto] = useState([]);
    const [id, setId] = useState('');

    const obterProduto = () => {
        axios.get(`http://localhost:8080/api/produtos/${id}`).then((response) => {
            setProduto(response.data)
            console.log(response.data)
  
        //   setProduto(response.data);
        })
    }

    const handleChange = (e) => setId(e.target.value)
    return (
        <>
          <p>OBTER PRODUTO POR ID</p>
          <input type="number" value={id} onChange={handleChange}/>
          <button onClick={obterProduto}>Obter Produto</button>
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
    );
    //TODO: PRODUTO POR ID
    
}

export default GetProdutoPorId;