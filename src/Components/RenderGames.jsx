import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Components/Context/CartProvider'; 
import '../Components/Styles/RenderGames.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
export const RenderGames = ({ games }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext); 
    
    const displayGameDetails = (id) => {
        navigate(`/game/${id}`);
    };
    useEffect(() => {
        Aos.init()
    })
    return (
        <div>
            <div className="row mt-5 ">
                {games.slice(0, 32).map((game) => (
                    <div
                        key={game.id}
                        className="col-lg-3 col-md-4 col-sm-6 mb-4 game-card loaded"
                    >
                        <div className={`card  `} data-aos = 'zoom-in-down' data-aos-duration = '1000' style={{ borderRadius: '25px' }}>
                            <img
                                style={{ borderRadius: '25px', cursor: 'pointer' }}
                                onClick={() => displayGameDetails(game.id)}
                                src={game.thumbnail}
                                className="card-img-top"
                                alt={game.title}
                            />
                            <div className="card-body">
                                <p style={{ color: '#7a7a7a', fontSize: '14px' }}>{game.genre}</p>
                                <h5 className="card-title">{game.title}</h5>
                                <button onClick={() => addToCart(game)} className="btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RenderGames;
