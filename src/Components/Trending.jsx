import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RenderGames from './RenderGames';
import { Link } from 'react-router-dom';
const Trending = () => {
    const [trending, setTrending] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'da045022dfmshfd3ea5ebaedd633p16c78ejsnf1d859486675',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        setTimeout(() => {
            
            const fetchTrending = async () => {
                try {
                    const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
                    const games = response.data;
    
                    const randomGames = shuffleArray(games).slice(0, 4);
                    setTrending(randomGames);
                } catch (err) {
                    console.log(err);
                }
            }
            fetchTrending();
        }, 1000);
    }, []);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    return (
        <div>
            <div className="container  mt-5">
                <div className="row d-flex justify-content-between">
                <div className="col-lg-12 gap-2">
                    <div className="left">
                        
                        <div className='d-flex justify-content-between'>
                        <h5 style={{ color: '#ee626b' }}>TRENDING</h5>
                        <Link to={'/shop'} className='fs-5 link' style={{fontWeight: '600'
                            ,border: 'none', outline: 'none',
                            textDecoration: 'none'
                        
                        }}><button className='btn btn-primary' style={{borderRadius: '25px'}}>View All</button></Link>
                        </div>
                        <h1 className='text-black' style={{fontWeight: '800'}}>Trending Games</h1>
                    </div>
                </div>
                </div>
            </div>

            <div className="container">
                <div className={`row trending`}>
                    <RenderGames games={trending} />
                </div>
            </div>
        </div>
    );
}

export default Trending;
