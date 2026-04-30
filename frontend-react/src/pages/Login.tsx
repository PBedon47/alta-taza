import {
  useState,
  type FormEvent
} from "react";

import {
  useNavigate
} from "react-router-dom";

import useAuth
from "../hooks/useAuth";

function Login(){

const { login }
= useAuth();

const navigate = useNavigate();

const [email,setEmail]
= useState("");

const [password,setPassword]
= useState("");

const handleSubmit = async (
e:FormEvent
)=>{

e.preventDefault();

login(email,password);

navigate("/");

};

return(

<div className="auth-container">

<form
className="auth-form"
onSubmit={handleSubmit}
>

<h2>Iniciar Sesión</h2>

<input
type="email"
placeholder="Correo"
value={email}
onChange={(e)=>
setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Contraseña"
value={password}
onChange={(e)=>
setPassword(e.target.value)}
required
/>

<button type="submit">
Ingresar
</button>

</form>

</div>

)

}

export default Login;