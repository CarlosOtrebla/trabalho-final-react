import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import './styles.css';



export default function Login() {
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [cadastrado, setCadastrado] = useState(false);
  

  const handleCadastrar = () => {
    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("Nascimento:", nascimento);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    console.log("CEP:", cep);
    
    setCadastrado(true);

    setNome('');
    setNascimento('');
    setTelefone('');
    setEmail('');
    setCpf('');
    setCep('');

  };

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Crie Seu Login</h1>
      <form onSubmit={(event) => { event.preventDefault(); }}>
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          id="nascimento"
          label="Nascimento"
          type="date"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nascimento}
          onChange={(event) => setNascimento(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <TextField
          id="cep"
          label="CEP"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />

        <Button
          type="button"
          className="btn-form"
          variant="contained"
          color="primary"
          onClick={handleCadastrar}
        >
          Cadastrar
        </Button>
      </form>
      {cadastrado && (
        <Typography variant="h6" color="secondary" className="mensagem-sucesso">
          Usuário cadastrado com sucesso!
        </Typography>
      )}
    </Container>
  );
}

// nome tel email cpf
// url cep
// {
//   "nome": "Patrick",
//   "telefone":"(24)98845-0909",
//   "email": "joao@gmail.com",
//   "cpf": "08807763745"
// }