import React, { useState } from 'react';
import axios from 'axios';

function DeleteCategoria() {

    const [categoria, setCategoria] = useState("");
    
    const deletarPessoa = () => {
        axios.delete(`http://localhost:8080/api/categorias/${categoria}`)
    }

    const handleChange = (e) => setNome(e.target.value);

    return (
      <>
        <h1>Deletar Categoria</h1>
      </>
    )
}

export default DeleteCategoria;