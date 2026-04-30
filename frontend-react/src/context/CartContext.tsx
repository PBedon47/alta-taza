import {
createContext,
useContext,
useState,
type ReactNode
} from "react";

type CartItem = {
id:number;
nombre:string;
precio:number;
categoria:string;
quantity:number;
};

type CartContextType = {

cart:CartItem[];

addToCart:(product:Omit<CartItem,"quantity">)=>void;

removeFromCart:(id:number)=>void;

removeAllFromCart:(id:number)=>void;

clearCart:()=>void;

subtotal:number;

};

const CartContext =
createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children:ReactNode }){

const [cart,setCart] = useState<CartItem[]>([]);

/* ➕ AGREGAR */
const addToCart = (product:Omit<CartItem,"quantity">)=>{

setCart(prev=>{

const exists = prev.find(i=>i.id === product.id);

if(exists){
return prev.map(i=>
i.id === product.id
? {...i, quantity:i.quantity + 1}
: i
);
}

return [...prev, {...product, quantity:1}];

});

};

/* ➖ RESTAR */
const removeFromCart = (id:number)=>{

setCart(prev=>{

return prev
.map(i=>{
if(i.id === id){
return {...i, quantity:i.quantity - 1};
}
return i;
})
.filter(i=> i.quantity > 0);

});

};

/* 🗑 ELIMINAR TODO */
const removeAllFromCart = (id:number)=>{

setCart(prev =>
prev.filter(item => item.id !== id)
);

};

/* 🧹 LIMPIAR */
const clearCart = ()=>{
setCart([]);
};

/* 💰 TOTAL */
const subtotal = cart.reduce(
(acc,item)=> acc + item.precio * item.quantity,
0
);

return(
<CartContext.Provider value={{
cart,
addToCart,
removeFromCart,
removeAllFromCart,
clearCart,
subtotal
}}>
{children}
</CartContext.Provider>
);

}

export function useCart(){

const context = useContext(CartContext);

if(!context){
throw new Error("useCart debe usarse dentro de CartProvider");
}

return context;

}