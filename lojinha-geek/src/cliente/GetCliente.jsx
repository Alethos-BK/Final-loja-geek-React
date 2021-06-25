import React, { useState } from 'react';
import axios from 'axios';

function GetCliente() {

    const [cliente, setCliente] = useState([])

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes`).then((response) => {
            setCliente(response.data)
        })
    }
    return (
        <div>
            <button onClick={obterCliente}>Obter CLientes</button>
            {cliente.map((c) => (
                <h3 key={c.id}>{c.nome}</h3>
            ))}
        </div>
    );
}

export default GetCliente;