import {
FaTrash,
FaPlus,
FaMinus,
FaCoffee
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type CartItem = {
id:number;
nombre:string;
precio:number;
categoria:string;
quantity:number;
};

type CartProps = {

cart:CartItem[];

onClose:()=>void;

onAdd:(item:Omit<CartItem,"quantity">)=>void;

onRemove:(id:number)=>void;

onDeleteAll:(id:number)=>void;

};

function Cart({
cart,
onClose,
onAdd,
onRemove,
onDeleteAll
}:CartProps){

const navigate = useNavigate();

/* 💰 TOTAL PRO */
const subtotal = cart.reduce(
  (acc, item) => acc + item.precio * item.quantity,
  0
);

return(

<div className="cart-overlay" onClick={onClose}>

<div
className="cart-panel"
onClick={(e)=> e.stopPropagation()}
>

<div className="cart-header">

<h2>Tu Pedido</h2>

<button onClick={onClose}>
Cerrar
</button>

</div>

{cart.length === 0 ? (

<div className="empty-cart">

<div className="empty-icon">
<FaCoffee />
</div>

<h3>Tu carrito está vacío</h3>

<p>
Agrega tus bebidas favoritas para comenzar
tu pedido
</p>

<button
className="empty-btn"
onClick={()=>{
onClose();
navigate("/menu");
}}
>
Explorar menú
</button>

</div>

) : (

<>

<div className="cart-products">

{cart.map((item)=>(

<div
className="cart-item"
key={item.id}
>

<div className="cart-left">

<h4>{item.nombre}</h4>

<p>S/ {item.precio}</p>

</div>

<div className="cart-controls">

{/* ➖ */}
<button onClick={()=> onRemove(item.id)}>
<FaMinus />
</button>

<span>{item.quantity}</span>

{/* ➕ */}
<button onClick={() => {
  onAdd({
    id: item.id,
    nombre: item.nombre,
    precio: item.precio,
    categoria: item.categoria
  });
}}>
<FaPlus />
</button>

</div>

{/* 🗑 ELIMINAR TODO */}
<button
className="delete-btn"
onClick={()=> onDeleteAll(item.id)}
>
<FaTrash />
</button>

</div>

))}

</div>

<div className="cart-footer">

<h3>Total: S/ {subtotal}</h3>

<button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Finalizar compra
</button>

<div className="mini-login-card">

<h4>Continúa tu pedido</h4>

<p>
Inicia sesión o regístrate para guardar
tu historial de compras.
</p>

<div className="login-row">

<Link to="/login">
<button>Iniciar sesión</button>
</Link>

<Link to="/register" className="register-link">
Registrarse
</Link>

</div>

</div>

</div>

</>

)}

</div>

</div>

)

}

export default Cart;