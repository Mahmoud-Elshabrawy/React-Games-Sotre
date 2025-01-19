import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import game1 from '../Images/banner-image.jpg';
import game2 from '../Images/single-game.jpg';
import game3 from '../Images/trending-01.jpg';
import game4 from '../Images/top-game-02.jpg';
import './Styles/MostPlayed.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
const MostPlayed = () => {
    const list = [game1, game2, game3, game4];
    const cardStyle = {
        width: '100%', 
        borderRadius: '10px', 
        overflow: 'hidden', 
    };

    
    useEffect(() => {
        Aos.init()
    }, []);

    return (
        <div data-aos = 'zoom-in' data-aos-duration = '1000' style={{ backgroundColor: '#eee', width: '100%', borderRadius: '100px' ,
            padding: '20px 60px', marginTop: '100px'
         }}>
            <div className={`container mt-5 mostPlayed `}>
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-12 gap-2">
                        <div className="left">
                            <div className='d-flex justify-content-between'>
                                <h5 style={{ color: '#ee626b' }}>Top Games</h5>
                                <Link to={'/shop'} className='fs-5 link' 
                                style={{ fontWeight: '600',
                                border: 'none',
                                outline: 'none',
                                textDecoration: 'none' }}>
                                    <button className='btn btn-primary' style={{borderRadius: '25px'}}>View All</button>
                                </Link>
                            </div>
                            <h1 className='text-black' style={{ fontWeight: '800' }}>Most Played</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {list.map((img, idx) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos = 'zoom-in' data-aos-duration = '1000' key={idx}>
                            <div className={`card transition `} style={cardStyle}>
                                <img src={img} className="card-img-top" style={{height: '300px'}} alt="game" />
                                <div className="card-body">
                                    <h5 className="card-title">Trending</h5>
                                    <p style={{ fontSize: '14px', color: '#000' }}>Game Description</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MostPlayed;
