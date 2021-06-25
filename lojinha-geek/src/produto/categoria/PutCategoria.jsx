import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import EstiloCategoria from "./EstiloCategoria";

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
    
      <center>
        
        <h2>Atualizar Categoria</h2>
      
        <label htmlFor="id">Id</label>
        <p><input type="number" name="id" value={id}  onChange={HandleChangeId}/> </p>
      
        <label htmlFor="nome">Nome</label>
        <p> <input type="text" name="nome" value={nome} onChange={HandleChangeNome}/></p>

        <label htmlFor="descricao">Descricao</label>
        <p> <input type="text" name="descricao" value={descricao} onChange={HandleChangeDescricao}/></p>

        <button onClick={atualizarCategoria}>Atualizar categoria</button>
      
        </center>

   
        )
 }

export default PutCategoria;
