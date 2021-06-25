import React, { useState } from 'react';
import axios from 'axios';

import { Button, Form} from 'react-bootstrap';

function PostCliente () {
    const [ , setCliente] = useState({});

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');

    const adicionarPessoa = (e) => {
        e.preventDefault()
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

        alert(`Cliente ${nome} cadastrado com sucesso!`)
    }

    return (
        // <form>
        //     <h1>Cliente</h1>
        //     <div>
        //         <label htmlFor="email">Email</label>
        //         <input type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
        //     </div>
           
        //     <div>
        //         <label htmlFor="nome">Nome</label>
        //         <input type="text" name="idade" value={nome}  onChange={(e) => setNome(e.currentTarget.value)} />   
        //     </div>
                 
        //     <div>
        //         <label htmlFor="senha">Senha</label>
        //         <input type="text" name="senha" value={senha}  onChange={(e) => setSenha(e.currentTarget.value)}/>
        //     </div>

        //     <div>
        //         <label htmlFor="cpf">CPF</label>
        //         <input type="text" name="cpf" value={cpf}  onChange={(e) => setCpf(e.currentTarget.value)}/> 

        //     </div>

        //     <div>
        //         <label htmlFor="telefone">Telefone</label>
        //         <input type="text" name="telefone" value={telefone}  onChange={(e) => setTelefone(e.currentTarget.value)}/>
        //     </div>

        //     <div>
        //         <label htmlFor="telefone">Cep</label>
        //         <input type="text" name="cep" value={cep}  onChange={(e) => setCep(e.currentTarget.value)}/> 
        //     </div>
        //     <button onClick={adicionarPessoa}>Criar Cliente</button>
        //     <input type="send" />
        // </form>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNome(e.currentTarget.value)} placeholder="Enter Nome" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="senha">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setSenha(e.currentTarget.value)} placeholder="Senha" />
                    </Form.Group>

                    <Form.Group controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" onChange={(e) => setCpf(e.currentTarget.value)} placeholder="Enter CPF" />
                        <Form.Text className="text-muted">
                       
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" onChange={(e) => setTelefone(e.currentTarget.value)} placeholder="Enter Telefone" />
                        <Form.Text className="text-muted">
                     
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="cep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text"onChange={(e) => setCep(e.currentTarget.value)} placeholder="Enter Cep" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Button onClick={adicionarPessoa} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    );
}

export default PostCliente;