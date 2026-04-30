import { Link }
from "react-router-dom";

import { FaTimes }
from "react-icons/fa";

type WelcomeCardProps = {
onClose:()=>void;
};

function WelcomeCard({
onClose
}:WelcomeCardProps){

return(

<div className="welcome-card">

<button
className="close-btn"
onClick={onClose}
>

<FaTimes />

</button>

<p>
¿Deseas iniciar sesión para
una mejor experiencia?
</p>

<div className="welcome-buttons">

<Link to="/login">

<button className="login-btn">
Iniciar Sesión
</button>

</Link>

<button
className="guest-btn"
onClick={onClose}
>

Seguir como invitado

</button>

</div>

</div>

)

}

export default WelcomeCard;