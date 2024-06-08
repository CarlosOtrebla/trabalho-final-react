import React, {createContext, useState} from 'react'
import { GoogleLogin ,  GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Certifique-se de instalar o axios: npm install axios


export const UserContext = createContext();
export function Google() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

//   const responseGoogle = async (response) => {
//     console.log(response);
//     if (response?.profileObj){
//         navigate('/login');
//         // Enviar os dados do perfil para a sua API
//         const profile = response.profileObj;
//         try {
//           const res = await axios.post('https://localhost:8080', profile);
//           console.log(res.data);
//         } catch (error) {
//           console.error(error);

//         }
//     }
//   }
 
//   return (
//     <GoogleOAuthProvider clientId="678311632442-idvlbro4vm1qnll240e3rq1tum3jckev.apps.googleusercontent.com">
//       <div>
//         <GoogleLogin
//           buttonText="Entrar com o Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           cookiePolicy={'none'}
//         />
//       </div>
//     </GoogleOAuthProvider>
//   );
// }
const responseGoogle = async (response) => {
  console.log(response);
  if (response?.profileObj){
      navigate('/login');
      setUser(response.profileObj); // Atualiza o estado com os dados do usuário
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

