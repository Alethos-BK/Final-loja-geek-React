import React from 'react';
import axios from 'axios';

function PatchCliente () {
    const [cliente, setCliente] = useState({});

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
  
    const HandleChangeEmail = (e) => setEmail(e.currentTarget.value);
    const HandleChangeNome = (e) => setNome(e.currentTarget.value);
    const HandleChangeSenha = (e) => setSenha(e.currentTarget.value);
    const HandleChangeTelefone = (e) => setTelefone(e.currentTarget.value);
    const HandleChangeCep = (e) => setCep(e.currentTarget.value);

    let novoCLiente = {
        nome:nome,
        senha: senha,
        telefone: telefone,
        endereco: {cep = cep}
    }

    useEffect(() => {
        novoCLiente.nome = nome,
        novoCLiente.senha = senha,
        novoCLiente.telefone = telefone,
        novoCLiente.endereco.cep = cep

    },[email, nome, senha, telefone, cep])

    const adicionarPessoa = () => {
        setCliente(novoCLiente)
        axios.patch("http://localhost:8080/api/clientes", cliente);
    }

    return (
        <>
        <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={HandleChangeEmail}/>

            <label htmlFor="nome">Nome</label>
            <input type="number" name="idade" value={nome}  onChange={HandleChangeNome} />

            <label htmlFor="senha">Senha</label>
            <input type="number" name="senha" value={senha}  onChange={HandleChangeSenha}/> 

            <label htmlFor="telefone">Telefone</label>
            <input type="number" name="telefone" value={telefone}  onChange={HandleChangeTelefone}/>

            <label htmlFor="telefone">Cep</label>
            <input type="number" name="cep" value={cep}  onChange={HandleChangeCep}/>
        
            <button onClick={adicionarPessoa}>Enviar</button>
        </>
    );
}

export default PatchCliente;