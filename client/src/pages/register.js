import React from "react";
import './style.css';
import { Link } from 'react-router-dom';


const Register = () => {

  return (
    <div className="Formulario">
      <h1>usuario</h1>

      <div>
        <input type="text" name="nome" placeholder="Nome" />
        <input type="date" name="data_nascimento" placeholder="Data Nascimento" />
        <input type="text" name="cpf" placeholder="CPF" maxLength='11' />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="senha" placeholder="Senha" />
        <button href="#" class="Button">Salvar</button>
        <br />
        <Link to='/'>Login</Link>
      </div>
    </div>

  );

}

export default Register;