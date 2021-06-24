import React, { useState } from 'react';
import axios from 'axios';

function GetCliente() {

    const [cliente, setCliente] = useState([]);

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes`).then((response) => {
            setCliente(response.data);
            console.log(response.data)
        })
    }
    return (
        <>
        cliente
            <button onClick={obterCliente}>Teste</button>
        </>
    );
}

export default GetCliente;