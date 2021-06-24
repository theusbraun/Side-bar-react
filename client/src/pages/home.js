import React from "react"
import './style.css';
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="Formulario">
      <h1>Login</h1>
      <input type="text" name="nome" placeholder="Cpf ou email" />
      <input type="password" name="senha" placeholder="Senha" />
      <button href="#" class="Button">Login</button>
      <br />
      <Link to="/register">Registrar</Link>
    </div>

  );
}

export default Home