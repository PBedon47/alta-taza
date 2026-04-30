import { useCart }
from "../context/CartContext";

function useCartTotal(){

const { cart }
= useCart();

const subtotal = cart.reduce(
(acc,item)=> acc + item.precio,
0
);

return subtotal;

}

export default useCartTotal;