import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/Context';

function Login() {
  const [email, setEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState(''); // Use a separate state for the login password
  const { password } = useContext(AuthContext);
  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${loginPassword}`);
  
    const response = await fetch('http://localhost:8080/clientes/listarClientes');
    const users = await response.json();
  
    // Find the user that matches the entered email
    const user = users.find(user => user.email === email);
  
    if (user && password === loginPassword) { // Check if the entered password matches the stored password
      console.log('Login successful');
      // Handle successful login here
    } else {
      console.log('Invalid email or password');
      // Handle failed login here
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={loginPassword} // Use loginPassword here
            onChange={(e) => setLoginPassword(e.target.value)} // Update loginPassword here
            required
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
