import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import WelcomeCard from "../components/WelcomeCard";

import featuredProducts from "../data/featuredProducts";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Home(){

  // 🔥 estados
  const [openCart,setOpenCart] = useState(false);
  const [showWelcome,setShowWelcome] = useState(false);

  // 🔥 contextos
  const { user } = useAuth();

  const {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart
  } = useCart();

  // 🔥 lógica del modal
  useEffect(() => {

    const closed = localStorage.getItem("welcomeClosed");

    if (!user && !closed) {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }

  }, [user]);

  return(

    <>

      <Navbar
        cantidad={cart.length}
        onOpenCart={()=> setOpenCart(true)}
      />

      {showWelcome && (

        <WelcomeCard
          onClose={() => {
            setShowWelcome(false);
            localStorage.setItem("welcomeClosed", "true");
          }}
        />

      )}

      <Hero />

      <section className="menu">

        <h2>Especialidades</h2>

        <div className="grid">

          {featuredProducts.map((item)=>(

            <ProductCard
              key={item.id}
              nombre={item.nombre}
              precio={item.precio}
              imagen={item.imagen}
              onAdd={()=> addToCart(item)}
            />

          ))}

        </div>

      </section>

      {openCart && (

        <Cart
          cart={cart}
          onClose={()=> setOpenCart(false)}
          onAdd={(item)=> addToCart(item)}
          onRemove={(id)=> removeFromCart(id)}
          onDeleteAll={(id)=> removeAllFromCart(id)}
        />

      )}

      <Footer />

    </>

  )

}

export default Home;