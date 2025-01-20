import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Components/Context/CartProvider'; 
import '../Components/Styles/RenderGames.css';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/Cart.css';
import '../Components/Styles/Contact.css'

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(() => {
        const savedQuantity = sessionStorage.getItem('quantity')
        if(savedQuantity && savedQuantity !== 'undefined') {
            return JSON.parse(savedQuantity)
        }
        else {
            return cart.map((game) => ({ id: game.id, quantity: 1 }))
        }
    });

    const addItem = (game) => {
        const updatedCart = [...quantity];
        
        for (let i = 0; i < updatedCart.length; i++) {
            if (updatedCart[i].id === game.id) {
                updatedCart[i].quantity += 1;
                break;
            }
        }
        
        sessionStorage.setItem('quantity', JSON.stringify(updatedCart))
        setQuantity(updatedCart);
    };

    const removeItem = (game) => {
        const updatedCart = [...quantity];
        
        for (let i = 0; i < updatedCart.length; i++) {
            if (updatedCart[i].id === game.id) {
                if (updatedCart[i].quantity === 1) {
                    removeFromCart(game);
                    break;
                } else {
                    updatedCart[i].quantity -= 1;
                    break;
                }
            }
        }

        sessionStorage.setItem('quantity', JSON.stringify(updatedCart))
        setQuantity(updatedCart);
    };

    const displayGameDetails = (id) => {
        navigate(`/game/${id}`);
    };

    useEffect(() => {
        Aos.init();
    }, []);

return (
    <div className="container ">
        {cart.length === 0 ? (
            <h1 className="text-center margin text-dark">No items in the cart</h1>
        ) : (
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-10 col-lg-12 mt-5">
                    <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Title</th>
                                <th scope="col" className="d-none d-lg-block">Image</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((game, index) => (
                                <tr key={game.id}  data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                                    <th scope="row">{index + 1}</th>
                                    <td onClick={() => displayGameDetails(game.id)} style={{ cursor: 'pointer' }}>
                                        {game.title}
                                    </td>
                                    <td className="d-none d-lg-table-cell">
                                        <img 
                                            src={game.thumbnail} 
                                            className="img-fluid" 
                                            style={{ width: '35%', borderRadius: '10%' }} 
                                            alt={game.title} 
                                        />
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center quantity-buttons">
                                            <button onClick={() => addItem(game)} className=" quantity-button">+1</button>
                                            <span className="mx-2">
                                                {quantity.find(q => q.id === game.id)?.quantity}
                                            </span>
                                            <button onClick={() => removeItem(game)} className="  quantity-button">-1</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(game)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
    </div>
);
};

export default Cart;
