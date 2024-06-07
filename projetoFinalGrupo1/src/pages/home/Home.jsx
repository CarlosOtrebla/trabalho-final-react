import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  
  function handleNavigate() {
    navigate('/');
  }
  return (
    <>
      <Botao onclick={handleNavigate} valor={'Clique Aqui'} />
      <Botao valor={'Clique Aqui'} />
      <Botao valor={'Clique Aqui'} />
    </>
  );
}
