import React from "react";
import PostProduto from "../produto/PostProduto";
import PostPedido from "./PostPedido";

function Carrinho(props) {

  const [produtos, setProdutos] =React.useState([]);
  const [produtosId, setProdutosId]= React.useState(1)
  const [carrinho, setCarrinho] = React.useState([]);

  const { total } = props;
 

  const badge = {
    display: "inline-block",
    padding: ".25em .4em",
    fontSize: "75%",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",
    backgroundColor: "#dc3545",
  };


  const addCarrinho = (prod) => {
    setCarrinho((anterior) => [...anterior, prod]);
    setProdutosId(props.id)
    produtos.push(produtosId);
    console.log(produtosId)
    console.log(produtos)
    //axios.post("/pedido", livro).then()
  };

  const guardarNoLocalStorage = localStorage.setItem(produtosId, produtos);

  

  return (
    <div>
      {/* <h2>
        🛒 Carrinho <span style={badge}>{total || "0"}</span>
      </h2> */}

      <button onClick={() => addCarrinho(produtos)}>add</button>


      <button onClick={PostProduto}>aa</button>
     
    


      <button onClick={() => addCarrinho(produtos)}>add</button>
      
      {/* <button onClick={PostProduto}></button> */}
     
    {/* <PostPedido listaIds={produtosId}/> */}

    </div>

  );

//TODO: AQUI NAO PODE TER ESSE POST / ACHAR UM JEITO DE PEGAR A LISTA Q CARRINHO DA
  
}

export default Carrinho;