import React from "react";
import { Carrossel } from "../../components/Card/Carrossel";
import { NavBarHz } from "../../components/layout/NavBar";
import { MenuProduto } from "../../components/layout/MenuProduto";
import { Button } from "@mui/material";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="pagina-inicial">
      <div className="barra-navegacao-horizontal">
        <NavBarHz />
      </div>

      <div className="imagem-secao">
        <img
          src="https://file.rendit.io/n/qyOX3M9x98.png"
          alt="Imagem brilhante e convidativa mostrando as melhores ofertas e novos produtos em celulares"
          className="imagem-destaque"
        />
      </div>

      <div className="componente-pesquisa">
        <input
          type="text"
          placeholder="Pesquisar por celulares e acessórios"
          className="input-pesquisa"
        />
        <Button variant="contained" className="botao-pesquisa">
          Pesquisar
        </Button>
      </div>

      <div className="categorias-populares">
        <h2 className="titulo">Categorias Populares</h2>
        <div className="grupo-chip">
          <Button variant="outlined" className="item-chip">
            Smartphones
          </Button>
          <Button variant="outlined" className="item-chip">
            Acessórios
          </Button>
          <Button variant="outlined" className="item-chip">
            Tablets
          </Button>
          <Button variant="outlined" className="item-chip">
            Computadores
          </Button>
          <Button variant="outlined" className="item-chip">
            Carregadores
          </Button>
        </div>
      </div>

      <div className="melhores-ofertas">
        <h2 className="titulo">Melhores Ofertas</h2>
        <div className="galeria-rolavel">
          <div className="item-galeria">
            <img
              src="https://file.rendit.io/n/RsxQYJZ530.png"
              alt="Imagem do produto iPhone 13"
              className="imagem-galeria"
            />
            <h3>iPhone 13</h3>
            <p>R$ 799,00</p>
          </div>
          <div className="item-galeria">
            <img
              src="https://file.rendit.io/n/slFmDx7oEM.png"
              alt="Imagem do produto Samsung Galaxy S21"
              className="imagem-galeria"
            />
            <h3>Samsung Galaxy S21</h3>
            <p>R$ 699,00</p>
          </div>
          <div className="item-galeria">
            <img
              src="https://file.rendit.io/n/yAM0Y86FiP.png"
              alt="Imagem do produto Google Pixel 6"
              className="imagem-galeria"
            />
            <h3>Google Pixel 6</h3>
            <p>R$ 599,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
