import { useState } from 'react'

import './App.css'
import { Cart } from './pages/carrinho/Carrinho'
import { Sobre } from './pages/sobre/Sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!!
      </h1>
      <div>
        <Cart />
        <Sobre />
      </div>
    </>
  )
}

export default App;
