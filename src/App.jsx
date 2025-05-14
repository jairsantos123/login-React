import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='login'>
      <div className="tela">
      <h1>Bem Vindo</h1>
      <p>Faça login para continuar</p>

      <div className="formulario">
        <label>Email</label>
        
        <input type="email" placeholder="Email" />

        <label>Senha</label>
        <input type="password" placeholder="Sua Senha" />
      </div>

      <div className="lembrar">
        <input type="checkbox" id="lembrar" />
        <label htmlFor="lembrar">Lembrar-me</label>
        
      </div>

      <a href="" className="esqueceu">Esqueceu a senha?</a>

      <button >Entrar</button>

      <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
    </div>
        </div>

    </>
  )
}

export default App
