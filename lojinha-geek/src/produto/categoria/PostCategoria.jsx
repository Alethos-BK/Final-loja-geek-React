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
        <>
        <h1>Adicionar categoria</h1>

        <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" value={nome} onChange={HandleChangeNome}/>

            <label htmlFor="idade">Descrição</label>
            <input type="text" name="descricao" value={descricao}  onChange={HandleChangeDescricao} />

            <button onClick={adicionarCategoria}>Cadastrar categoria</button>
        </>
    )
}

export default PostCategoria