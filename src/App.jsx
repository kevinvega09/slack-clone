import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  

  return (
    <>
      <div>
      <h1>Bienvenido a mi Chat</h1>
      <nav>
        <Link to="/login">Iniciar sesión</Link> |  
        <Link to="/register">Registrarse</Link>
      </nav>
    </div>
    </>
  )
}
