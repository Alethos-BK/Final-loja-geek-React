import React, { useState }  from 'react';
import axios from 'axios'

function GetCategoria(){

  const [categoria, setCategoria] = useState([]);

  const obterTodasAsCategorias = () => {
		axios.get(`http://localhost:8080/api/categorias`).then((response) =>{
			setCategoria(response.data)
		});
	}

	return (
		<>
		  <h1>Categoria por id</h1>
			<button onClick={obterTodasAsCategorias}> Categoria</button>
			{categoria.map((cat) => (
				<p key={cat.id}> Nome: {cat.nome} Descricão: {cat.descricao}</p>
			))}
		</>
	)
}

export default GetCategoria;