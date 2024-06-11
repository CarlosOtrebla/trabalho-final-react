import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import {AuthContext} from "../context/Context"
import Login from "../pages/login/Login";
import { Sobre } from "../pages/sobre/Sobre";
import Contato from "../pages/contato/Contato";
import Footer from "../pages/footer/Footer";
import { Carrinho } from "../pages/carrinho/Carrinho";
import Cadastro from "../pages/login/Cadastro";
import { useState } from "react";
import { useContext } from "react";


export function Rotas() {
  const [password, setPassword] = useState('');


  return (
    <AuthContext.Provider value={{ password, setPassword }}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </Router>
    </AuthContext.Provider>
  );
}
