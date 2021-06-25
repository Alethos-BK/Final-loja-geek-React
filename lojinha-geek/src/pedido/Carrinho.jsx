import React from "react";
import PostProduto from "../produto/PostProduto";
import PostPedido from "./PostPedido";

function Carrinho(props) {

  const [produtos, setProdutos] =React.useState([]);
  const [produtosId, setProdutosId]= React.useState("")
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


  const addCarrinho = (produtos) => {
    setCarrinho((anterior) => [...anterior, produtos]);
    setProdutosId(props.id)

    console.log(produtosId)
    //axios.post("/pedido", livro).then()
  };

  // const guardarNoLocalStorage = localStorage.setItem(produtosId);

  return (
    <div>
      {/* <h2>
        🛒 Carrinho <span style={badge}>{total || "0"}</span>
      </h2> */}

      <button onClick={() => addCarrinho(produtos)}>add</button>


      <button onClick={PostProduto}>aa</button>
     
    

    </div>

  );

//TODO: AQUI NAO PODE TER ESSE POST / ACHAR UM JEITO DE PEGAR A LISTA Q CARRINHO DA
  
}

export default Carrinho;