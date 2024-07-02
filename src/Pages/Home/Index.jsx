import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Recipe from '../../Components/Recipe/Recipe'

const Index = () => {
  const { loading, receipeList } = useContext(GlobalContext)
  if (loading) return <div>Loading...Please Wait!</div>
  return (
    <div className='recipe-container'>
      {
        receipeList && receipeList.length > 0 ?
          receipeList.map((item) =>
            <Recipe item={item} key={item.id} />
          )
          : <div>
            <h1 className='no-recipes'>No Recipes Found</h1>
          </div>
      }
       <div className='designer-name'>
        Designed by: Abhinav
      </div>
    </div>
  )
}

export default Index
