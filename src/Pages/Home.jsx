import React, { useContext, useEffect, useState } from 'react';
import bg from '../Images/banner-bg.jpg';
import banner from '../Images/banner-image.jpg';
import '../Components/Styles/Home.css';
import featured1 from '../Images/featured-01.png'
import featured2 from '../Images/featured-02.png'
import featured3 from '../Images/featured-03.png'
import featured4 from '../Images/featured-04.png'
import Trending from '../Components/Trending';
import MostPlayed from '../Components/MostPlayed';
import last from '../Images/single-game.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {SearchContext} from '../Components/Context/SearchProvider'
export const Home = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)

useEffect(() => {
    // setLoaded(true);
    Aos.init()
}, []);
    const navigate = useNavigate()
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearchClick = () => {
        if(searchValue === '') {
            alert('Type Something')
        }
        else {
            navigate('/searchResult')
        }
    }
return (
<div>

<div
    style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    paddingBottom: '100px'
    }}
    className={` `}
>
    <div className={`container text-center mt-5`}>
    <div className="row d-flex justify-content-between align-items-center">
        <div className="col-lg-6 leftSide d-flex flex-column justify-content-center align-items-center gap-3">
        <h6
            className={`welcome ` }
            data-aos = 'fade-right'
            data-aos-duration = "500"
            style={{
            fontSize: '20px',
            fontWeight: '500',
            letterSpacing: '0.5px',
            color: 'white',
            }}
        >
            WELCOME TO LUGX
        </h6>
        <h2
            data-aos = 'fade-right'
            data-aos-duration = "1000"
            style={{
            fontSize: '48px',
            color: 'white',
            }}
            className={`BestGaming ` }
        >
            BEST GAMING SITE EVER
        </h2>
        <p data-aos = 'fade-right'
            data-aos-duration = "1500" className={`paragraph` }>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>

        <div data-aos = 'fade-right'
            data-aos-duration = "1500" className={`search mt-5 position-relative `} style={{ width: '80%' }}>
            <input onChange={handleSearch}
            value={searchValue}
            style={{
                width: '90%',
                height: '50px',
                padding: '10px 20px',
                borderRadius: '25px',
                border: 'none',
                fontSize: '16px',
                outline: 'none',
            }}
            placeholder="Type Something"
            type="text"
            />
            <button onClick={handleSearchClick}
            style={{
                backgroundColor: '#ee626b',
                width: '40%',
                height: '51px',
                borderRadius: '25px',
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
                zIndex: '1001',
                border: 'none',
                outline: 'none'
            }}
            className="d-flex justify-content-center align-items-center link"
            >
            <h6 className="m-0 text-white">Search Now</h6>
            </button>
        </div>
        </div>

        <div className={`col-lg-6 rightSide position-relative banner `}>
            <div className={`position-relative d-inline-block mt-5`}
                data-aos = 'fade-left'
            data-aos-duration = "500"
            >
                <img
                    src={banner}
                    className="rounded-4 w-100"
                    alt="Banner"
                    style={{ maxWidth: '100%' }}
                />

                <div
                    style={{
                        backgroundColor: '#007aff',
                        width: '60px',
                        height: '40px',
                        position: 'absolute',
                        top: '10%',
                        right: '10%',
                        zIndex: '1000',
                        borderRadius: '5px',
                    }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h4 className="text-white m-0">$22</h4>
                </div>

                <div
                    style={{
                        backgroundColor: '#ee626b',
                        width: '90px',
                        height: '90px',
                        position: 'absolute',
                        bottom: '-4%',
                        left: '-4%',
                        zIndex: '1000',
                        borderRadius: '50%',
                    }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h2 className="text-white m-0">-40%</h2>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
<div className="container">
    <div className="row box-row  d-flex justify-content-center">
            <div className=" col-lg-3 col-md-6 col-sm-8">
                <div className="feature-box flex-column"data-aos="zoom-in"   data-aos-duration="500" style={{ backgroundColor: '#fff', height: '200px', borderRadius: '35px', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='box d-flex mn justify-content-center align-items-center '
                        style={{ width: '40%', height: '60%' ,backgroundColor: '#007aff', borderRadius: '100%'}}>
                    <img src={featured1}  className='img-fluid' alt="Featured 1"  />
                    </div>
                    <h4 className='text-black mt-3'>Free Storage</h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="feature-box flex-column" data-aos="zoom-in" data-aos-duration="500"  style={{ backgroundColor: '#fff', height: '200px', borderRadius: '25px', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='box d-flex justify-content-center align-items-center '
                        style={{ width: '40%', height: '60%' ,backgroundColor: '#007aff', borderRadius: '100%'}}>
                    <img src={featured2}  className='img-fluid' alt="Featured 1"  />
                    </div>
                    <h4 className='text-black mt-3'>Use More</h4>

                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="feature-box flex-column" data-aos="zoom-in" data-aos-duration="500"  style={{ backgroundColor: '#fff', height: '200px', borderRadius: '25px', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='box d-flex justify-content-center align-items-center '
                        style={{ width: '40%', height: '60%' ,backgroundColor: '#007aff', borderRadius: '100%'}}>
                    <img src={featured3}  className='img-fluid' alt="Featured 1"  />
                    </div>
                    <h4 className='text-black mt-3'>Replay Ready</h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
                <div className="feature-box flex-column" data-aos="zoom-in" data-aos-duration="500"  style={{ backgroundColor: '#fff', height: '200px', borderRadius: '25px', boxShadow: '0 8px 10px rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='box d-flex justify-content-center align-items-center '
                        style={{ width: '40%', height: '60%' ,backgroundColor: '#007aff', borderRadius: '100%'}}>
                    <img src={featured4}  className='img-fluid' alt="Featured 1"  />
                    </div>
                    <h4 className='text-black mt-3'>Easy Layout</h4>
                </div>
            </div>
            <Trending />
            <MostPlayed />
            <div data-aos = 'zoom-in' data-aos-duration = '1000' className="col-lg-12 lastSection mt-5 d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex justify-content-center d-none d-lg-block">
                    <img 
                        src={last} 
                        style={{
                            height: '500px',
                            objectFit: 'cover',
                            borderRadius: '50px'
                        }} 
                        alt="" 
                    />
                </div>
                <div className='d-flex last'>
    <div className="left col-6  d-flex justify-content-center align-items-center flex-column gap-3 lastfirst" style={{
        backgroundColor: '#eee',
        color: '#000',
        padding: '25px',
        borderRadius: '50px',
        position: 'relative',
        left: '-10%',
        top: '-112%'
    }}>
        <h6 style={{color: '#ee626b', fontWeight: '900'}}>Our Shop</h6>
        <h3>Go Pre-Order Buy & Get Best <span><h3 style={{color: '#007aff'}}>Prices</h3></span> For You!</h3>
        <p style={{color: '#4a4a4a'}}>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
        <Link to={'/shop'} className='btn btn-dark' style={{backgroundColor: '#ee626b', outline: 'none', border: 'none'}}>Shop Now</Link>
    </div>
    <div className="left col-6 d-flex justify-content-center align-items-center flex-column gap-3 lastfirst" style={{
        backgroundColor: '#eee',
        color: '#000',
        padding: '25px',
        borderRadius: '50px',
        position: 'relative',
        left: '10%',
        top: '-95%'
    }}>
        <h6 style={{color: '#ee626b', fontWeight: '900'}}>NEWSLETTER</h6>
        <h3>Get Up To $100 Off Just Buy Newsletter! <span><h3 style={{color: '#007aff'}}>Subscribe</h3></span> For You!</h3>
        <p style={{color: '#4a4a4a'}}>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
        <Link to={'/shop'} className='btn btn-dark' style={{backgroundColor: '#ee626b', outline: 'none', border: 'none'}}>Subscribe Now</Link>
    </div>
</div>

</div>

        </div>
</div>
</div>

);
};

export default Home;
