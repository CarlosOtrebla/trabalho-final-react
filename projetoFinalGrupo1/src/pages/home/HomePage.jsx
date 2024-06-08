
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/layout/NavBar';
import { Botao } from '../../components/Button/Button';
import './HomePage.css'



export function HomePage() {
  
//    const navigate = useNavigate();

//  function handleNavigateToLogin() {
//     navigate('/login');
//  }

  return (
    <>
      <NavBar/> 
      
      <br />
      <br />
      {/* <Botao onclick={handleNavigateToLogin} valor={'Login'} /> */}
      <br />
      <br />
    </>
  );
}
