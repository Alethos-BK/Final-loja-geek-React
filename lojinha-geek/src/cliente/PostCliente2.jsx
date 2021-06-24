import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostCliente () {
    const [cliente, setCliente] = useState({});

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
  
    const HandleChangeEmail = (e) => setEmail(e.currentTarget.value);
    const HandleChangeNome = (e) => setNome(e.currentTarget.value);
    const HandleChangeSenha = (e) => setSenha(e.currentTarget.value);
    const HandleChangeCpf = (e) => setCpf(e.currentTarget.value);
    const HandleChangeTelefone = (e) => setTelefone(e.currentTarget.value);
    const HandleChangeCep = (e) => setCep(e.currentTarget.value);

    const adicionarPessoa = () => {
        setCliente(novoCliente)
        axios.post("http://localhost:8080/api/clientes", cliente);
    }

    return (
        <>
         <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={HandleChangeEmail}/>

            <label htmlFor="nome">Nome</label>
            <input type="number" name="idade" value={nome}  onChange={HandleChangeNome} />

            <label htmlFor="senha">Senha</label>
            <input type="number" name="senha" value={senha}  onChange={HandleChangeSenha}/> 

            <label htmlFor="cpf">CPF</label>
            <input type="number" name="cpf" value={cpf}  onChange={HandleChangeCpf}/> 

            <label htmlFor="telefone">Telefone</label>
            <input type="number" name="telefone" value={telefone}  onChange={HandleChangeTelefone}/>

            <label htmlFor="telefone">Cep</label>
            <input type="number" name="cep" value={cep}  onChange={HandleChangeCep}/> 
        
            <button onClick={adicionarPessoa}>Enviar</button>
        </>
    );
}

export default PostCliente;