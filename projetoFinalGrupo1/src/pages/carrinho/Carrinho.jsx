import React, { useState, useEffect } from "react";
import "./carrinho.css";
import axios from 'axios';


export function Carrinho() {
  const [items, setItems] = useState([]);
  const [quantidades, setQuantidades] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const api = axios.create({
      baseURL: 'http://localhost:8080',
    });

    api.get('/carrinho')
    .then(response => {
      console.log('Itens do carrinho:', response.data); // Imprime os itens do carrinho
      const itensApi = response.data;
      setItems(itensApi);
      const quantidadesIniciais = itensApi.reduce((acc, item) => {
        acc[item.id] = 1; 
        return acc;
      }, {});
      setQuantidades(quantidadesIniciais);
    })
    .catch(error => {
      console.error("Erro ao buscar itens do carrinho:", error);
    });

  api.get('/carrinho/valor-total')
    .then(response => {
      console.log('Valor total do carrinho:', response.data); // Imprime o valor total do carrinho
      setTotal(response.data);
    })
    .catch(error => {
      console.error("Erro ao calcular o valor total do carrinho:", error);
    });
}, []);

  const aumentarQuantidade = (id) => {
    const novasQuantidades = { ...quantidades };
    novasQuantidades[id] = novasQuantidades[id] + 1;
    setQuantidades(novasQuantidades);
  };

  const diminuirQuantidade = (id) => {
    const novasQuantidades = { ...quantidades };
    if (novasQuantidades[id] > 1) {
      novasQuantidades[id] = novasQuantidades[id] - 1;
      setQuantidades(novasQuantidades);
    }
  };

  const removerItem = (id) => {
    const novasQuantidades = { ...quantidades };
    delete novasQuantidades[id];
    setQuantidades(novasQuantidades);
  };

  const removerTodosItens = () => {
    setQuantidades({});
  };

  return (
    <div className="carrinho-container">
      <div className="carrinho">
        <h2>Carrinho de Compras</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <div>
                <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                <span>{quantidades[item.id]}</span>
                <button onClick={() => aumentarQuantidade(item.id)}>+</button>
              </div>
              <span>R$ {item.price.toFixed(2)}</span>
              <button onClick={() => removerItem(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button onClick={removerTodosItens}>Excluir Carrinho</button>
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
}