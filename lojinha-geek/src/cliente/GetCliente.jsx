import React, { useState } from 'react';
import axios from 'axios';

function GetCliente() {

    const [cliente, setCliente] = useState([])

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes`).then((response) => {
            
        })
    }
    return (
        <div>
            <button onClick={obterCliente}>Obter CLientes</button>
        </div>
    );
}

export default GetCliente;