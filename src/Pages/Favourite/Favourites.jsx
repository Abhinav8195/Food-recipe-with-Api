import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Recipe from '../../Components/Recipe/Recipe'

const Favourites = () => {
  const { favorites } = useContext(GlobalContext)
  return (
    <div className='recipe-container'>
      {
        favorites && favorites.length > 0 ?
          favorites.map((item) =>
            <Recipe item={item} key={item.id} />
          )
          : <div>
            <h1 className='no-recipes'>Nothing is added!</h1>
          </div>
      }
       <div className='designer-name'>
        Designed by: Abhinav
      </div>
    </div>
  )
}

export default Favourites
