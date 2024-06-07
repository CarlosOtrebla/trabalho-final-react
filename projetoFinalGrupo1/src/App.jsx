import { useState } from 'react'
import { ToolBar } from './components/ToolBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navBar"> <ToolBar/></div>
    <div className='divBody'>
     <h1>Hello World</h1>
     
    </div>
    </>
  )
}

export default App
