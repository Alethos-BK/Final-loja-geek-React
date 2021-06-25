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
        <div>
        Nome
            <input type="text" value={nome} onChange={handleChange}/>
            <button onClick={obterCliente}>Obter CLiente Por Nome</button>
            {cliente.map((c)=> (
                <div>
                    <h2>{c.nome}</h2>
                    <h2>{c.email}</h2>
                </div>
            ))}
        </div>
    );
}

export default GetClientePorNome;