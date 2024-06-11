import React from "react";
import { Button } from "@mui/material";

const ProductCard = ({ produto, addToCart }) => {
  return (
    <div style={styles.card}>
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p>Categoria: {produto.nomeCategoria}</p>
      <p>Preço: R${produto.precoUnitario.toFixed(2)}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToCart(produto)}
      >
        Adicionar ao Carrinho
      </Button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default ProductCard;
