import React, { useState } from 'react';
import axios from 'axios';

//TODO: Não tá funfando;
function PatchCliente () {
    const [ , setCliente] = useState({});

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');

    const adicionarPessoa = () => {
        const novo = {
        email,
        nome,
        senha,
        telefone,
        endereco: { cep }
    };
        
        axios.patch(`http://localhost:8080/api/clientes/${id}`, novo).then(response => {
          setCliente(response.data);
        });
    }

    return (
        <div>
            <div>
                <label htmlFor="id">ID</label>
                <input type="text" name="id" value={id}  onChange={(e) => setId(e.currentTarget.value)}/> 
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
            </div>

            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="idade" value={nome}  onChange={(e) => setNome(e.currentTarget.value)} />
            </div>

            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" value={senha}  onChange={(e) => setSenha(e.currentTarget.value)}/> 
            </div>

            <div>
                <label htmlFor="telefone">Telefone</label>
                <input type="text" name="telefone" value={telefone}  onChange={(e) => setTelefone(e.currentTarget.value)}/>
            </div>

            <div>
                <label htmlFor="telefone">Cep</label>
                <input type="text" name="cep" value={cep}  onChange={(e) => setCep(e.currentTarget.value)}/> 
            </div>

            <button onClick={adicionarPessoa}>Pach</button>
        </div>
    );
}

export default PatchCliente;