import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Components/Styles/GameDetails.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const GameDetails = () => {
    const { gameId } = useParams()
    const [game, setGame] = useState(null)  // Set initial state as null
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'da045022dfmshfd3ea5ebaedd633p16c78ejsnf1d859486675',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        Aos.init()
        const Game = async () => {
            try {
                const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
                setGame(response.data)
                console.log(response.data);
            } catch (err) {
                console.log(`Error fetching gameId ${gameId}`, err);
            }
        }
        Game()
    }, [gameId])  

    if (!game) {  
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="container"   style={{ marginTop: '50px', marginBottom: '100px' }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12">
                        <img src={game.thumbnail} data-aos = 'zoom-in-up' data-aos-duration = '1000' style={{ width: '100%', height: '100%', borderRadius: '40px' }} alt={game.title} />
                    </div>
                    <div className="col-lg-6 col-sm-12 details">
                        <h1 className='text-black' data-aos = 'zoom-in-up' data-aos-duration = '1000'>{game.title}</h1>
                        <p className='text-secondary' data-aos = 'zoom-in-up' data-aos-duration = '1000'>{game.short_description}</p>
                    </div>
                </div>

                {game.screenshots && game.screenshots.length > 0 && ( 
                    <>
                        <h1 className='text-black d-flex justify-content-center align-items-center mt-5'>Screen Shots</h1>
                        <div className="row justify-content-center align-items-center screenShots mt-4" data-aos = 'zoom-in-up' data-aos-duration = '1000'>
                            {game.screenshots.map((screenshot, index) => (
                                <div key={index} className="col-lg-4">
                                    <img src={screenshot.image} style={{ width: '100%', borderRadius: '40px' }} alt={game.title} />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default GameDetails
