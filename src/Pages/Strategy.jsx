import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenderGames from '../Components/RenderGames';
import Pagination from '../Components/Pagination';
import Categories from '../Components/Categories';
export const Strategy = () => {
const [strategy, setStrategy] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [gamesPerPage] = useState(16);

const lastGameIdx = currentPage * gamesPerPage;
const firstGameIdx = lastGameIdx - gamesPerPage;
const displayedGames = strategy.slice(firstGameIdx, lastGameIdx);
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'da045022dfmshfd3ea5ebaedd633p16c78ejsnf1d859486675',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
useEffect(() => {
    const strategyGames = async () => {
    try {
        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy',options)
        setStrategy(response.data);
        console.log(response.data);
        
    } catch (error) {
        console.error('Error fetching shooter games:', error);
    }
    };

    strategyGames();
}, []);

return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#007aff', height: '250px', 
            borderBottomLeftRadius: '100px',
            borderBottomRightRadius: '100px',
            marginBottom: '100px'
        }}>
            <h1 className='fs-1'>Our Shop</h1>
            <h5>Home <i class="fa-solid fa-chevron-right " style={{fontSize: '15px'}}></i> Shop 
            <i class="fa-solid fa-chevron-right " style={{fontSize: '15px'}}></i> Strategy</h5>
        </div>
        <div className="container">

        <div className="row">
            <div className="col">
            <Categories />
        <RenderGames games={displayedGames} />
        <Pagination totalGames={strategy.length} gamesPerPage={gamesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </div>
        </div>

        </div>
);
};

export default Strategy;
