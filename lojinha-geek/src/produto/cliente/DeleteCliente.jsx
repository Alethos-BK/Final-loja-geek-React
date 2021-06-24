import React, { useState } from 'react';
import axios from 'axios';

function DeleteCliente() {
    const [id, setId] = useState('');

    const apagarCliente = (e) => {
        axios.delete(`http://localhost:8080/api/clientes/${id}`);
        console.log(id)
    }

    const handleChange = (e) => {setId(e.target.value);
        console.log(id)
    }

    return(
        <>
        Apagar
            <button onClick={apagarCliente}>Apagar</button>
            <input type="text" value={id} onChange={handleChange}/>
        </>
    );
}

export default DeleteCliente;