import heroImage
from "../assets/hero.jpg";

import {
useNavigate
} from "react-router-dom";

function Hero(){

const navigate = useNavigate();

return(

<section
className="hero"
style={{
backgroundImage:`url(${heroImage})`
}}
>

<div className="overlay">

<h1>Alta Taza</h1>

<h2>
Café artesanal hecho para cada momento
</h2>

<p>
Desde el mejor grano hasta tu taza.
</p>

<button
onClick={()=>
navigate("/menu")}
>

Ordena Ahora

</button>

</div>

</section>

)

}

export default Hero;