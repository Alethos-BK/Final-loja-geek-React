import React from 'react';
import axios from 'axios';

function DeleteProduto () {

    const [id, setId] = React.useState('');

    const deletarProduto = () => {
        console.log(id)
        axios.delete(`http://localhost:8080/api/produtos/${id}`)
    }

    
    const handleChange = (e) => setId(e.target.value);

    return (
        <>
        <h1>Deletar Produto</h1>
        <button onClick={deletarProduto}>Apagar</button>
        <input type="text" value={id} onChange={handleChange}/>
      </>
    );
}

export default DeleteProduto;