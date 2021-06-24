import React, { useState } from 'react';
import axios from 'axios';

function GetClientePorId() {

    const [cliente, setCliente] = useState([]);
    const [id, setNome] = useState('');

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes/${id}`).then((response) => {
            setCliente(response.data);
            console.log(response.data)
        })
    }

    const handleChange = (e) => setNome(e.target.value)
    return (
        <>
        
            <input type="number" value={id} onChange={handleChange}/>
            <button onClick={obterCliente}>Teste</button>
        </>
    );
}

export default GetClientePorId;