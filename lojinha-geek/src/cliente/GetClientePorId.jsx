import React, { useState } from 'react';
import axios from 'axios';
//TODO: não funfa
function GetClientePorId() {

    const [cliente, setCliente] = useState([]);
    const [id, setId] = useState('');

    const obterCliente = () => {
        axios.get(`http://localhost:8080/api/clientes/${id}`).then((response) => {
          console.log(response.data)
          setCliente(response.data);
        })
    }

    return (
        <>
          
            <input type="text" value={id} onChange= {(e) => setId(e.target.value)}/>
            <button onClick={obterCliente}>Obter CLiente Por ID</button>

            {/* {cliente.map((cl => (
                <p key={cl.id}>
                    Email: {cl.email}
                    Nome: {cl.nome}
                </p>
            
            )))} */}
          
          
        </>
    )
}

export default GetClientePorId;