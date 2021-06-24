import React, { useState } from 'react';
import axios from 'axios';

function PostCliente () {
    const [ , setCliente] = useState({});

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');

    const adicionarPessoa = () => {
        const novo = {
        email,
        nome,
        senha,
        cpf,
        telefone,
        endereco: { cep }
    };
        
        axios.post("http://localhost:8080/api/clientes", novo).then(response => {
          console.log(response.data);
          setCliente(response.data);
        });
    }

    return (
        <>
         <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>

            <label htmlFor="nome">Nome</label>
            <input type="text" name="idade" value={nome}  onChange={(e) => setNome(e.currentTarget.value)} />

            <label htmlFor="senha">Senha</label>
            <input type="text" name="senha" value={senha}  onChange={(e) => setSenha(e.currentTarget.value)}/> 

            <label htmlFor="cpf">CPF</label>
            <input type="text" name="cpf" value={cpf}  onChange={(e) => setCpf(e.currentTarget.value)}/> 

            <label htmlFor="telefone">Telefone</label>
            <input type="text" name="telefone" value={telefone}  onChange={(e) => setTelefone(e.currentTarget.value)}/>

            <label htmlFor="telefone">Cep</label>
            <input type="text" name="cep" value={cep}  onChange={(e) => setCep(e.currentTarget.value)}/> 
        
            <button onClick={adicionarPessoa}>Enviar</button>
        </>
    );
}

export default PostCliente;