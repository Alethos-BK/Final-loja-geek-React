import React, { useState } from 'react';
import axios from 'axios';
//TODO: não funfa
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
        ID
            <input type="text" value={id} onChange={handleChange}/>
            <button onClick={obterCliente}>Obter CLiente Por ID</button>
            {/* {cliente.map((c)=> (<h1>a</h1>))} */}
        </>
    );
}

export default GetClientePorId;