import {
Link,
useNavigate
} from "react-router-dom";

import {
FaCoffee
} from "react-icons/fa";

function Login(){

const navigate = useNavigate();

const handleLogin = ()=>{

navigate("/");

};

return(

<div className="auth-container">

<form className="auth-form">

<div className="auth-logo">

<FaCoffee />

</div>

<h2>
Bienvenido
</h2>

<p className="auth-subtitle">

Inicia sesión para acceder
a tus pedidos, historial
y promociones exclusivas.

</p>

<input
type="email"
placeholder="Correo electrónico"
/>

<input
type="password"
placeholder="Contraseña"
/>

<button
type="button"
onClick={handleLogin}
>

Iniciar sesión

</button>

<p className="auth-link">

¿No tienes cuenta?{" "}

<Link to="/register">

Crear cuenta

</Link>

</p>

</form>

</div>

)

}

export default Login;