import React, {createContext, useState} from 'react'
import { GoogleLogin ,  GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { decode } from 'jsonwebtoken';

export const UserContext = createContext();

export function Google() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const responseGoogle = async (response) => {
    console.log("Esta sendo chamada");
    if (response) {
      console.log(response);
      if (response.credential){
        const decodedToken = decode(response.credential);
        console.log(decodedToken); // Imprime o token decodificado no console
  
        const profile = {
          nome: decodedToken.name,
          email: decodedToken.email,
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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// // Esta é a sua função redutora
// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // Crie a loja Redux
// let store = createStore(counter);

// // O componente Counter
// const Counter = ({ value, onIncrement, onDecrement }) => (
//   <div>
//     <h1>Valor: {value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// );

// // Renderize o aplicativo
// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <Counter
//         value={store.getState()}
//         onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//         onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//       />
//     </Provider>,
//     document.getElementById('root')
//   );
// };

// render();
// store.subscribe(render);