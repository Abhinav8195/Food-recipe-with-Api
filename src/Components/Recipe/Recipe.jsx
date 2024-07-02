import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({ item }) => {
  return (
    
    <div className='recipe-card'>
      <div className="image-container">
        <img src={item?.image_url} alt="recipe item" className='recipe-image' />
      </div>

      <div>
        <span className='publisher'>{item?.publisher}</span>
        <h3 className='title'>{item?.title}</h3>
        <Link to={`/details/${item?.id}`} className="details-button">Recipe Details</Link>
      </div>
    </div>
  )
}

export default Recipe
