import React, { useState } from 'react';
import axios from 'axios';

function GetClientePorNome() {

    const [cliente, setCliente] = useState([]);
    const [nome, setNome] = useState('');

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes/nome/${nome}`).then((response) => {
            setCliente(response.data);
            console.log(cliente)
        })
    }

    const handleChange = (e) => setNome(e.target.value)

    return (
        <>
        Nome
            <input type="text" value={nome} onChange={handleChange}/>
            <button onClick={obterCliente}>Teste</button>
        </>
    );
}

export default GetClientePorNome;