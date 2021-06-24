import React, { useState } from 'react';
import axios from 'axios';

function GetCliente() {

    const [cliente, setCliente] = useState([]);

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes`).then((response) => {
            setCliente(response.data);
        })
    }
    return (
        <div>
        cliente
            <button onClick={obterCliente}>Obter CLientes</button>
            
            {cliente.map((c) => (
                <h2 key={c.id}>Nome: {c.nome} Id:{c.id}</h2>
            ))}
        </div>
    );
}

export default GetCliente;