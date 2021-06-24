import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PutCategoria() {
    const [categoria, setCategoria] = useState({});

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [id, setId] = useState('');

    const HandleChangeNome = (e) => setNome(e.currentTarget.value);
    const HandleChangeDescricao = (e) => setDescricao(e.currentTarget.value);
    const HandleChangeId = (e) => setId(e.currentTarget.value);

    const atualizarCategoria = () => {
        const novo = {
          nome,
          descricao
        }
        axios.put(`http://localhost:8080/api/categorias/${id}`, novo).then((response) => setCategoria(response.data))
     
    }

    return (
      <>
        <h1>Atualizar Categoria</h1>
      
        <label htmlFor="id">Id</label>
        <input type="number" name="id" value={id}  onChange={HandleChangeId}/> 
      
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" value={nome} onChange={HandleChangeNome}/>

        <label htmlFor="descricao">Descricao</label>
        <input type="text" name="descricao" value={descricao} onChange={HandleChangeDescricao}/>

        <button onClick={atualizarCategoria}>Atualizar categoria</button>
      </>
    )
}

export default PutCategoria;