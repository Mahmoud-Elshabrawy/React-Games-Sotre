import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Components/Shop.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Categories = () => {
    useEffect(() => {
        Aos.init()
    })
  return (
    <div className='container' data-aos = 'fade-left' data-aos-duration = '1000'>
        <ul className='d-flex justify-content-center gap-3 flex-wrap mt-5'>
            <Link className='link' to={'/shop'}>
                <button className='btn btn-secondary CategoryButton' style={{borderRadius: '25px', fontWeight: '700'}}>SHOW ALL</button>
            </Link>
            <Link className='link' to={'/shooter'}>
                <button className='btn  btn-secondary CategoryButton' style={{borderRadius: '25px', fontWeight: '700'}}>Shooter</button>
            </Link>
            <Link className='link' to={'/strategy'}>
                <button className='btn  btn-secondary CategoryButton' style={{borderRadius: '25px', fontWeight: '700'}}> STRATEGY</button>
            </Link>
            <Link className='link' to = {'/racing'}>
                <button className='btn btn-secondary  CategoryButton' style={{borderRadius: '25px', fontWeight: '700'}}> SPORTS</button>
            </Link>
        </ul>
    </div>
  )
}

export default Categories