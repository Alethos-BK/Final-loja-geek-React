import React, { useState } from 'react';
import axios from 'axios';
//TODO: não funfa
function GetClientePorId() {

    const [cliente, setCliente] = useState("");
    const [id, setNome] = useState('');


    const obterCliente = () => {
        console.log(cliente)
        axios.get(`http://localhost:8080/api/clientes/${id}`).then((response) => {

            setCliente(response.data);
        
          console.log(response.data)
          setCliente(response.data);
        })
    }

    return (

        <div>
        ID
            <input type="text" value={id} onChange={handleChange}/>
         
            <button onClick={obterCliente}>Obter CLiente Por ID</button>

            {/* {cliente.map((c) => console.log("a"))} */}
            
            
        </div>
    );

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
    );
}

export default GetClientePorId;
