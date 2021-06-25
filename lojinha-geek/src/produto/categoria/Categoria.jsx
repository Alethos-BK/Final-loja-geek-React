import GetCategoria from "./GetCategoria";
import PostCategoria from "./PostCategoria";
import PutCategoria from "./PutCategoria";
import DeleteCategoria from "./DeleteCategoria";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Categoria() {


  return (


    <div>

      <center>
       <GetCategoria />
      </center>

      <center><p> <Link to="/Adicionar"><button>Cadastrar Categoria</button></Link></p> </center>


      <center><p> <Link to="/Atualizar"><button>Atualizar Categoria</button></Link></p> </center>


      <center><p> <Link to="/Apagar"><button>Apagar Categoria</button></Link> </p></center>




    </div>



  )
}

export default Categoria;

