import React from 'react';

const ProductCard = ({ produto }) => {
  return (
    <div style={styles.card}>
      <h3>{produto.nome}</h3>
      <img src={produto.urlFoto} alt="Foto do Produto" />
      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.precoUnitario.toFixed(2)}</p>
      <p>Categoria: {produto.nomeCategoria}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
};

export default ProductCard;
