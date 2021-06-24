import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostProduto () {
    const [ produto, setProduto] = useState({});


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');
    const [imagem, setImagem] = useState('');
    const [dataDeCadastro, setDataDeCadastro] = useState('');
    const [categoria, setCategoria] = useState([]);
    const [categoriaId, setCategoriaId] = useState('');


    const obterTodasAsCategorias = () => {
       axios.get(`http://localhost:8080/api/categorias/`).then((response) =>{
         console.log(response.status)
         setCategoria(response.data)
         
     	});
        }
    
        useEffect(obterTodasAsCategorias, [])
        //  const categoriaExiste = categoria.find((categ) => (
        // categoria ? categ.id : 1
        
    

    const adicionarProduto = () => {
        const novo = {
        nome,
        descricao,
        preco,
        estoque,
        imagem,
        dataDeCadastro
    }
        
        axios.post(`http://localhost:8080/api/produtos/${categoriaId}`, novo).then(response => {
          console.log(response.data);
          setProduto(response.data);
        });
    }

    return (
        <>
         
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" value={nome}  onChange={(e) => setNome(e.currentTarget.value)} />

            <label htmlFor="descricao">descricao</label>
            <input type="text" name="descricao" value={descricao}  onChange={(e) => setDescricao(e.currentTarget.value)}/> 

            <label htmlFor="preco">preco</label>
            <input name="preco" value={preco}  onChange={(e) => setPreco(e.currentTarget.value)}/> 

            <label htmlFor="estoque">estoque</label>
            <input type="number" name="estoque" value={estoque}  onChange={(e) => setEstoque(e.currentTarget.value)}/>

            <label htmlFor="imagem">Url da imagem do produto</label>
            <input type="text" name="imagem" value={imagem}  onChange={(e) => setImagem(e.currentTarget.value)}/>  

            <label htmlFor="dataDeCadastro">dataDeCadastro</label>
            <input type="text" name="dataDeCadastro" value={dataDeCadastro}  onChange={(e) => setDataDeCadastro(e.currentTarget.value)}/>

        
            <select name="select" onChange={(e) => setCategoriaId(e.currentTarget.value)}>
                
                {categoria.map((categ) =>
                {
                console.log("ergwgrt5")
                return(
                ( <option value= {categ.id} selected> {categ.nome}"</option> )
                )
                }

                
                )}

            </select>
           
            <button onClick={adicionarProduto}>Enviar</button>
        </>
    );
}

export default PostProduto;