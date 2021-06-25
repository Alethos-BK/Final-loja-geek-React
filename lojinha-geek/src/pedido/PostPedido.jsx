import React, { useEffect, useState } from 'react';
import axios from 'axios';


function PostPedido(props) {
    const [pedido, setPedido] = useState({});

    const [dataDoPedido, setDataDoPedido] = useState('');
    const [pedidoFinalizado, setPedidoFinalizado] = useState('');
    const [produtoId, setProdutoId] = useState([]);
    const [idCliente, setIdCliente] = useState('');


    const adicionarPedido = () => {
        const novo = {
            dataDoPedido,
            pedidoFinalizado,
            produtoId

        }

        axios.post(`http://localhost:8080/api/pedidos/${idCliente}`, novo).then(response => {
            console.log(response.data);
            setPedido(response.data);
    
            });
    }

       /*
    
        const criarPedido = () => {
            // data
            // setPedidoFinalizado = "nao"
            // setProdutoId = [...props.listaIds]
            // // adicionarPedido() 
        }
        */
    return (
      <>

        <label htmlFor="idCliente">Digite seu id: </label>
        <input type="text" name="idCliente" value={idCliente} onChange={(e) => seIdCliente(e.currentTarget.value)} />
      
        <button onClick={criarPedido}> Finalizar pedido</button>

       
        <button onClick={criarPedido}>Finalizar pedido</button>

        
      </>
    )
}

export default PostPedido;