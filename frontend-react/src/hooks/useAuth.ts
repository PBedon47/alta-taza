import { useState }
from "react";

function useAuth(){

const [user,setUser]
= useState(null);

const login = (
email:string,
password:string
)=>{

console.log(
"Iniciando sesión",
email,
password
);

};

const register = (
nombre:string,
email:string,
password:string
)=>{

console.log(
"Registrando usuario",
nombre,
email,
password
);

};

const logout = ()=>{

setUser(null);

};

return{

user,

login,

register,

logout

};

}

export default useAuth;