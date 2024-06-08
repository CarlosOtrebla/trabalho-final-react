import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import { Sobre } from '../pages/sobre/Sobre';

export function Rotas() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </Router>
  );
}
