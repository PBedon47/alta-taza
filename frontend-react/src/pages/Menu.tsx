import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { getProducts } from "../services/api";
import {useCart} from "../context/CartContext";
import type { Product } from "../types/product";

/* ICONOS */

import {FaCoffee, FaSnowflake, FaBirthdayCake, FaHamburger, FaLeaf, FaGlassWhiskey} from "react-icons/fa";

function Menu(){

const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const load = async () => {
    const data = await getProducts();
    setProducts(data || []);
    setLoading(false);
    
  };

  load();
}, []);

    if (loading) {
      return <div className="loading">Cargando productos...</div>;
    }

const [openCart,setOpenCart] = useState(false);

const {
cart,
addToCart,
removeFromCart,
removeAllFromCart
} = useCart();

/* CATEGORÍAS */

const cafesCalientes =
products.filter(
(item)=>
item.categoria === "Cafés calientes"
);

const cafesFrios =
products.filter(
(item)=>
item.categoria === "Cafés fríos"
);

const tes =
products.filter(
(item)=>
item.categoria === "Tés"
);

const bebidas =
products.filter(
(item)=>
item.categoria === "Bebidas"
);

const postres =
products.filter(
(item)=>
item.categoria === "Postres"
);

const brunch =
products.filter(
(item)=>
item.categoria === "Brunch"
);

return(

<>

<Navbar
cantidad={cart.length}
onOpenCart={()=>
setOpenCart(true)}
/>

<section className="menu-page">

<h1>
Nuestro Menú
</h1>

{/* CAFÉS CALIENTES */}

<div className="category">

<h2>

<FaCoffee className="category-icon" />

Cafés Calientes

</h2>

<div className="grid">

{cafesCalientes.map((item)=>(

<ProductCard
key={item.id}
nombre={item.nombre}
precio={item.precio}
imagen={item.imagen ?? "/default-product.jpg"}
onAdd={()=>
addToCart(item)}
/>

))}

</div>

</div>

{/* CAFÉS FRÍOS */}

<div className="category">

<h2>

<FaSnowflake className="category-icon" />

Cafés Fríos

</h2>

<div className="grid">

{cafesFrios.map((item)=>(

<ProductCard
key={item.id}
nombre={item.nombre}
precio={item.precio}
imagen={item.imagen ?? "/default-product.jpg"}
onAdd={()=>
addToCart(item)}
/>

))}

</div>

</div>

{/* TÉS */}

<div className="category">

<h2>

<FaLeaf className="category-icon" />

Tés

</h2>

<div className="grid">

{tes.map((item)=>(

<ProductCard
key={item.id}
nombre={item.nombre}
precio={item.precio}
imagen={item.imagen ?? "/default-product.jpg"}
onAdd={()=>
addToCart(item)}
/>

))}

</div>

</div>

{/* BEBIDAS */}

<div className="category">

<h2>

<FaGlassWhiskey className="category-icon" />

Bebidas y Jugos

</h2>

<div className="grid">

{bebidas.map((item)=>(

<ProductCard
key={item.id}
nombre={item.nombre}
precio={item.precio}
imagen={item.imagen ?? "/default-product.jpg"}
onAdd={()=>
addToCart(item)}
/>

))}

</div>

</div>

{/* POSTRES */}

<div className="category">

<h2>

<FaBirthdayCake className="category-icon" />

Postres

</h2>

<div className="grid">

{postres.map((item)=>(

<ProductCard
key={item.id}
nombre={item.nombre}
precio={item.precio}
imagen={item.imagen ?? "/default-product.jpg"}
onAdd={()=>
addToCart(item)}
/>

))}

</div>

</div>

{/* BRUNCH */}

<div className="category">

<h2>

<FaHamburger className="category-icon" />

Brunch & Sánguches

</h2>

<div className="grid">

{brunch.map((item)=>(

<ProductCard
key={item.id}
nombre={item.nombre}
precio={item.precio}
imagen={item.imagen ?? "/default-product.jpg"}
onAdd={()=>
addToCart(item)}
/>

))}

</div>

</div>

</section>

{openCart && (
  <Cart
    cart={cart}
    onClose={() => setOpenCart(false)}
    onAdd={(item) => addToCart(item)}
    onRemove={(id) => removeFromCart(id)}
    onDeleteAll={(id) => removeAllFromCart(id)}
  />
)}

<Footer />

</>

)

}

export default Menu;