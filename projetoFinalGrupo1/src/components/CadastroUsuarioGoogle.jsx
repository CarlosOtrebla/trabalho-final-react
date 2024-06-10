import React, {createContext, useState} from 'react'
import { GoogleLogin ,  GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { Buffer } from 'buffer';

export const UserContext = createContext();

export function Google() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const responseGoogle = async (response) => {
    console.log("Esta sendo chamada");
    if (response) {
      console.log(response);
      const profile = {
        nome: response.profileObj.name, // Access name directly from response
        email: response.profileObj.email,
      };
  
      navigate('/login');
      try {
        const res = await axios.post('http://localhost:8080/clientes/cadastrar', profile);
        console.log(res.status);
        console.log(res.data);
      } catch (error) {
        if (error.response) {
          console.error(error.response.status);
          console.error(error.response.data);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error('Error', error.message);
        }
      }
    } else {
      console.log('Response is undefined');
    }
  }

  return (
    <GoogleOAuthProvider clientId="678311632442-idvlbro4vm1qnll240e3rq1tum3jckev.apps.googleusercontent.com">
      <UserContext.Provider value={user}> {/* Passa os dados do usuário através do provedor de contexto */}
        <div>
          <GoogleLogin
            buttonText="Entrar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'none'}
          />
        </div>
      </UserContext.Provider>
    </GoogleOAuthProvider>
  );
}
