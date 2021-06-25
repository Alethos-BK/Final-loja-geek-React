import React, { useState }  from 'react';
import axios from 'axios'
import EstiloCategoria from "./EstiloCategoria";

function GetCategoria(){

  const [categoria, setCategoria] = useState([]);

  const obterTodasAsCategorias = () => {
        axios.get(`http://localhost:8080/api/categorias`).then((response) =>{
            console.log(response.status)
            setCategoria(response.data)
        });
    }

    return (
        
          <div>
              
         <center> <h2>Categorias</h2></center>
            {categoria.map((cat) => (
                <p  key={cat.id}>  Nome: {cat.nome} Descricão: {cat.descricao}
                </p>
))} 

        
        </div>
        
    )
}

export default GetCategoria;

