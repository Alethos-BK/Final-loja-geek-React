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

<<<<<<< HEAD
        
    
 }
=======

>>>>>>> acdca686b5f1c4f14fa050e9f7cab51833d1b7d3

 }

export default GetClientePorId;