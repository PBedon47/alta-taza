import {
Link,
useNavigate
} from "react-router-dom";

import {
FaCoffee
} from "react-icons/fa";

function Register(){

const navigate = useNavigate();

const handleRegister = ()=>{

navigate("/");

};

return(

<div className="auth-container">

<form className="auth-form">

<div className="auth-logo">

<FaCoffee />

</div>

<h2>
Crear cuenta
</h2>

<p className="auth-subtitle">

Regístrate para guardar
tus pedidos y obtener
beneficios exclusivos.

</p>

<input
type="text"
placeholder="Nombre completo"
/>

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
onClick={handleRegister}
>

Registrarme

</button>

<p className="auth-link">

¿Ya tienes cuenta?{" "}

<Link to="/login">

Iniciar sesión

</Link>

</p>

</form>

</div>

)

}

export default Register;