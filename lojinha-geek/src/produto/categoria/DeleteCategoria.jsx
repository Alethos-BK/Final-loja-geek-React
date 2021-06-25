import React, { useState } from 'react';
import axios from 'axios';
import EstiloCategoria from "./EstiloCategoria";

function DeleteCategoria() {

    const [categoria, setCategoria] = useState("");
    const [id, setId] = useState('');

    const deletarPessoa = () => {
        axios.delete(`http://localhost:8080/api/categorias/${id}`)
    }

    const handleChange = (e) => setId(e.target.value);

    return (
      <EstiloCategoria>
      <center>
        <p><h2>Deletar Categoria</h2></p>
       <p> <input type="number" value={id} onChange={handleChange}/></p>
       <button onClick={DeleteCategoria}>Deletar categoria</button>
      </center>
      </EstiloCategoria>
     
    )
}

export default DeleteCategoria;
