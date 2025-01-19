import React, { useEffect, useState } from 'react';
import '../Components/Shop.css';
import RenderGames from '../Components/RenderGames';
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';
import Categories from '../Components/Categories';
export const Shop = () => {
    const [allGames, setAllGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(16);
    const lastGameIdx = currentPage * gamesPerPage;
    const firstGameIdx = lastGameIdx - gamesPerPage;
    const displayedGames = allGames.slice(firstGameIdx, lastGameIdx);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'da045022dfmshfd3ea5ebaedd633p16c78ejsnf1d859486675',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
            .then((res) => res.json())
            .then((data) => {
                setAllGames(data);
                console.log(data);
            })
            .catch((err) => console.log(`Error fetching games: ${err}`));
    }, []);
    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#007aff', height: '250px', 
                borderBottomLeftRadius: '100px',
                borderBottomRightRadius: '100px',
                marginBottom: '100px'
            }}>
                <h1 className='fs-1'>Our Shop</h1>
                <h5>Home <i class="fa-solid fa-chevron-right " style={{fontSize: '15px'}}></i> Shop </h5>
            </div>
            <div className='container'>
                <div className="row">
                    <div className={`col shop`}>
                        <Categories />
                        <RenderGames games={displayedGames} />
                        <Pagination totalGames={allGames.length} gamesPerPage={gamesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
