import React from 'react';
import axios from 'axios';

function GetPedidos () {

    const [pedido , setPedidos] = React.useState([]);

    const obterProdutos = () =>{
        axios.get("http://localhost:8080/api/pedidos").then((response) => {
            setPedidos(response.data)
        })
    }

    return (
        <div>
            <h1>Obter todos os Pedidos</h1>
            <button onClick={obterProdutos}> Pedidos</button>

            {pedido.map((c) => (
                <h2 key={c.id}>
                    Nome: {c.cliente.nome} {c.cliente.email} {c.cliente.endereco.rua}
                    {c.listaDeProdutos[0].id}
                </h2>
            ))}
        </div>
    );
}

export default GetPedidos;