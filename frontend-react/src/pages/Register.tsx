function Register(){

return(

<div className="auth-container">

<form className="auth-form">

<h2>Crear Cuenta</h2>

<input
type="text"
placeholder="Nombre"
/>

<input
type="email"
placeholder="Correo"
/>

<input
type="password"
placeholder="Contraseña"
/>

<button>
Registrarse
</button>

</form>

</div>

)

}

export default Register;