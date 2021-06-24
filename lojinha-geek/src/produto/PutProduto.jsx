import React from 'react';
import axios from 'axios';

function PutProduto () {

    const [ , setProduto] = React.useState([]);
    const [id, setId] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [preco, setPreco] = React.useState('');
    const [estoque, setEstoque] = React.useState('');
    const [imagem, setImagem] = React.useState('');
 

    const atualizarProduto = () => {
        const novo = {
            nome,
            descricao,
            preco,
            estoque,
            imagem
        }

        axios.put(`http://localhost:8080/api/produtos/${id}`, novo).then((response) => {
            setProduto(response.data);
            console.log(response.data)
        })
    }

    return (
        <div>
            <h1>Put Produto</h1>
            <label htmlFor="nome">Id do Produto</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>

            <label htmlFor="nome">Nome do Produto</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>

            <label htmlFor="nome">Descricao do Produto</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>

            <label htmlFor="nome">Preco do Produto</label>
            <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)}/>

            <label htmlFor="nome">Estoque do Produto</label>
            <input type="text" value={estoque} onChange={(e) => setEstoque(e.target.value)}/>

            <label htmlFor="nome">Imagem do Produto</label>
            <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)}/>

            <button onClick={atualizarProduto}>Atualizar</button>
        </div>
    );
}

export default PutProduto;