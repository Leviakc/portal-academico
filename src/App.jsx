import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './auth/LoginPage'
import { RegisterPage } from './auth/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<LoginPage/>*/}
      <RegisterPage/>
    </>
  )
}

export default App
