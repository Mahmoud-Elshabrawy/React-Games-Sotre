import React from 'react'
import '../Components/Styles/Pagination.css'
const Pagination = ({totalGames, gamesPerPage, setCurrentPage, currentPage}) => {
    const pages = []
    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pages.push(i)
    }
  return (
    <div className='d-flex justify-content-center flex-wrap gap-2'>
        {pages.map((page, index) => {
            return <div key={index}>
                <button className= {`pagination-btn ${currentPage === page? 'active' : ''}`} onClick={()=> setCurrentPage(page)} >{page}</button>
            </div>
        })}
    </div>
  )
}

export default Pagination