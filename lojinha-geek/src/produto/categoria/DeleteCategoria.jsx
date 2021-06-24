import React, { useState } from 'react';
import axios from 'axios';

function DeleteCategoria() {

    const [categoria, setCategoria] = useState("");
    const [id, setId] = useState('');


    const deletarPessoa = () => {
        axios.delete(`http://localhost:8080/api/categorias/${id}`)
    }

    const handleChange = (e) => setId(e.target.value);

    return (
      <>
        <h1>Deletar Categoria</h1>
        <button onClick={deletarPessoa}>Apagar</button>
        <input type="number" value={id} onChange={handleChange}/>
      </>
    )
}

export default DeleteCategoria;