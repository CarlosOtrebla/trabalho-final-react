import React, { useState } from "react";
import "./carrinho.css";
import { NavBarHz } from "../../components/layout/NavBar";

const items = [
  { id: 1, name: "Monitor Gamer", price: 1200 },
  { id: 2, name: "Teclado Mecânico", price: 250 },
  { id: 3, name: "Mouse sem fio", price: 80 },
  { id: 4, name: "SSD 1TB", price: 300 },
];

export function Carrinho() {
  // State para controlar a quantidade de cada item
  const [quantidades, setQuantidades] = useState(
    items.reduce((acc, item) => {
      acc[item.id] = 1; // Começa com quantidade 1 para cada item
      return acc;
    }, {})
  );

  // Função para aumentar a quantidade de um item
  const aumentarQuantidade = (id) => {
    const novasQuantidades = { ...quantidades };
    novasQuantidades[id] = novasQuantidades[id] + 1;
    setQuantidades(novasQuantidades);
  };

  // Função para diminuir a quantidade de um item
  const diminuirQuantidade = (id) => {
    const novasQuantidades = { ...quantidades };
    if (novasQuantidades[id] > 1) {
      novasQuantidades[id] = novasQuantidades[id] - 1;
      setQuantidades(novasQuantidades);
    }
  };

  // Função para remover um item do carrinho
  const removerItem = (id) => {
    const novasQuantidades = { ...quantidades };
    delete novasQuantidades[id];
    setQuantidades(novasQuantidades);
  };

  // Função para remover todos os itens do carrinho
  const removerTodosItens = () => {
    setQuantidades({});
  };

  // Calcula o total do carrinho
  const total = Object.keys(quantidades).reduce((acc, id) => {
    const item = items.find((item) => item.id.toString() === id);
    return acc + item.price * quantidades[id];
  }, 0);

  return (
    <div className="carriho-container">
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
