import { FaShoppingCart }
from "react-icons/fa";

import { Link }
from "react-router-dom";

type NavbarProps = {
cantidad:number;
onOpenCart:()=>void;
};

function Navbar({
cantidad,
onOpenCart
}:NavbarProps){

return(

<nav className="navbar">

<h1>Alta Taza</h1>

<ul>

<li>
<Link to="/">
Inicio
</Link>
</li>

<li>
<Link to="/menu">
Menú
</Link>
</li>

<li>
<Link to="/login">
Acceso
</Link>
</li>

</ul>

<button
className="cart-btn"
onClick={onOpenCart}
>

<FaShoppingCart />

<span>{cantidad}</span>

</button>

</nav>

)

}

export default Navbar;