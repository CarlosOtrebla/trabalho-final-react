import React from "react";
import { Carrossel } from "../../components/Card/Carrossel";
import { NavBarHz } from "../../components/layout/NavBar";
import { MenuProduto } from "../../components/layout/MenuProduto";
import { Button } from "@mui/material";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-page">
      <div className="navbar-horizontal">
        <NavBarHz />
      </div>

      <div className="carousel-produto">
        <div className="carousel">
          <Carrossel>
            <img src="image1.jpg" alt="Image 1" className="carousel-image" />
            <img src="image2.jpg" alt="Image 2" className="carousel-image" />
            <img src="image3.jpg" alt="Image 3" className="carousel-image" />
          </Carrossel>
        </div>
      </div>

      <div className="produtos-container">
        <div className="produtos-menu">
          <MenuProduto />
        </div>
        <div className="produtos-list">
          <div className="produto">
            <img src="../../assets/placaMae/placa-mae-asus-prime-h610m-e-d4-chipset-h610-intel-lga-1700-matx-ddr4-90mb19n0-m0eay0_170439.jpg" alt="Produto Image" />
            <h2>placa-mae-asus-prime-h610m</h2>
            <p>Descrição do Produto</p>
            <p>Preço: R$ 100,00</p>
            <Button>Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}