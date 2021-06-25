import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostCategoria(){
    const [categoria, setCategoria] = useState({});

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const HandleChangeNome = (e) => setNome(e.currentTarget.value);
    const HandleChangeDescricao = (e) => setDescricao(e.currentTarget.value);


    const adicionarCategoria = () => {
        const novo = {
            nome,
            descricao
        }
       
        axios.post(`http://localhost:8080/api/categorias`, novo).then((response) => {
            setCategoria(response.data)
        })
    }

    return (
        <div>
        <center>
        <h2>Adicionar Categoria</h2>

        <label htmlFor="nome">Nome</label>
        <p> <input type="text" name="nome" value={nome} onChange={HandleChangeNome}/> </p>

            <label htmlFor="idade">Descrição</label>
            <p> <input type="text" name="descricao" value={descricao}  onChange={HandleChangeDescricao} /> </p>

        
            <button onClick={adicionarCategoria}>Adicionar categoria</button>
            </center>
        </div>
    )
}

export default PostCategoria;
