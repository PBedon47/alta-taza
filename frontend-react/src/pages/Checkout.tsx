import { useCart }
from "../context/CartContext";

function Checkout(){

const {
cart,
subtotal
}
= useCart();

return(

<div className="checkout">

<h1>Checkout</h1>

{cart.map((item,index)=>(

<div
key={index}
className="checkout-item"
>

<h3>{item.nombre}</h3>

<p>S/ {item.precio}</p>

</div>

))}

<hr />

<h2>
Total: S/ {subtotal}
</h2>

<button className="checkout-btn">
Pagar
</button>

</div>

)

}

export default Checkout;