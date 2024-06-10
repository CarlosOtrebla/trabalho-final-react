
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/layout/NavBar';
import { Botao } from '../../components/Button/Button';
import './HomePage.css'
import ProductList from '../products/ProductList';


export function HomePage() {
  return (
    <>
      <NavBar/> 
      
      <br />
      <br />
      {/* <Botao onclick={handleNavigateToLogin} valor={'Login'} /> */}
      <br />
      <br />
      <ProductList/>
    </>
  );
}
