import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Recipe from '../../Components/Recipe/Recipe'

const Favourites = () => {
  const {favorites} = useContext(GlobalContext)
 
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favorites && favorites.length>0 ? 
        favorites.map((item) => 
          <Recipe item={item}/>
        )
        :<div>
          <h1 className='text-2xl text-center'>Nothing is added !</h1>
        </div>
      }
    </div>
  )
}

export default Favourites