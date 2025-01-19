import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
export const CartContext = createContext()
const CartProvider = ({children}) => {
  const [cart, setCart] = useState(() => {
    const savedGames = sessionStorage.getItem('cart')
    if(savedGames && savedGames !== 'undefined') {
      try {
        return JSON.parse(savedGames)
      }
      catch (err) {
        console.log(err);
        return []
      }
    } else {
      return []
    }
  }, [])
  const addToCart = (game) => {
    let exists = false;

    for (let i = 0; i < cart.length; i++) {
        if (game.id === cart[i].id) {  
            exists = true;
            break;  
        }
    }

    if (!exists) {
        const updatedList = [...cart, game];
        sessionStorage.setItem('cart', JSON.stringify(updatedList));
        setCart(updatedList);
        Swal.fire({
            title: `Added!`,
            text: `${game.title} Added to Cart`,
            icon: "success"
        });
    } else {
        alert(`${game.title} is Already Added to Cart`);
    }
};

const removeFromCart = (game) => {
  Swal.fire({
    title: "Do you want to delete this game?",
    showCancelButton: true,
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedList = cart.filter((item) => item.id !== game.id);
      sessionStorage.setItem('cart', JSON.stringify(updatedList)); 
      setCart(updatedList);

      Swal.fire("Deleted!", `${game.title} has been removed from the cart.`, "success");
      navigate('/cart');
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};



  return (
      <CartContext.Provider value={{cart, addToCart, removeFromCart, cartItems: cart.length}} >
        {children}
      </CartContext.Provider>
  )
}

export default CartProvider
