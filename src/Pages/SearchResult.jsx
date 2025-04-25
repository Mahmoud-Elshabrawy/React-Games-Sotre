import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../Components/Context/SearchProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
const SearchResult = () => {
    const { searchValue } = useContext(SearchContext);
    const [searchResult, setSearchResult] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'da045022dfmshfd3ea5ebaedd633p16c78ejsnf1d859486675',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        if (searchValue) {
            const getGame = async () => {
                try {
                    const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options);
                    setSearchResult(response.data);
                } catch (err) {
                    console.error('Error fetching game data:', err);
                }
            };
            getGame();
        }
    }, [searchValue]);

    useEffect(() => {
        if (searchValue && searchResult.length > 0) {
            const filtered = searchResult.filter((game) =>
                game.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredResults(filtered);
        }
        Aos.init()
    }, [searchResult, searchValue]);

    return (
        <div>
            {/* <h1 className='text-dark mt-5 d-flex justify-content-center'>
                You searched for: '{searchValue}'
            </h1> */}

            <div className="container mt-5 mb-5">
            {filteredResults.length > 0 ? (
                    filteredResults.map((game) => (
                        <div key={game.id} className="mb-5"  style={{marginTop: '130px'}}>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-6 col-sm-12">
                                    <img src={game.thumbnail} data-aos='zoom-in-up' data-aos-duration='1000' style={{ width: '100%', height: '100%', borderRadius: '40px' }} alt={game.title} />
                                </div>
                                <div className="col-lg-6 col-sm-12 details">
                                    <h1 className='text-black' data-aos='zoom-in-up' data-aos-duration='1000'>{game.title}</h1>
                                    <p className='text-secondary' data-aos='zoom-in-up' data-aos-duration='1000'>{game.short_description}</p>
                                    <div className='mt-5'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-dark d-flex justify-content-center'>No games found matching your search.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResult;
