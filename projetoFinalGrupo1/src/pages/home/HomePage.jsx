import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/layout/NavBar";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import "./HomePage.css";

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Slideshow = ({ images, currentImageIndex }) => (
    <AnimatePresence>
      <motion.img
        key={images[currentImageIndex].id}
        src={images[currentImageIndex].src}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="imagem-destaque"
      />
    </AnimatePresence>
  );
  const images = [
    { id: 1, src: "https://file.rendit.io/n/qyOX3M9x98.png" },
    { id: 2, src: "https://file.rendit.io/n/RsxQYJZ530.png" },
    { id: 3, src: "https://file.rendit.io/n/slFmDx7oEM.png" },
    { id: 4, src: "https://file.rendit.io/n/yAM0Y86FiP.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pagina-inicial">
      <div className="barra-navegacao-horizontal">
        <NavBar />
      </div>

      <div className="imagem-secao">
        <Slideshow images={images} currentImageIndex={currentImageIndex} />
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

