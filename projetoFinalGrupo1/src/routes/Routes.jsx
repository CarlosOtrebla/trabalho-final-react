import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import { Sobre } from '../pages/sobre/Sobre';
import Contato  from '../pages/contato/Contato';
import Footer from '../pages/footer/Footer';

export function Rotas() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
