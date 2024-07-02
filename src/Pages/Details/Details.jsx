import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../Context';

const Details = () => {
  const {id} = useParams();
  const{recipeDetails,setreceipeDetails,handleAddtofav,favorites}=useContext(GlobalContext)


  useEffect(()=>{
    async function getRecipeDetails(){
      const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data =await response.json()
      console.log(data)
      if(data?.data){
        setreceipeDetails(data?.data)
      }
    }
    getRecipeDetails()
  },[])
  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img src={recipeDetails?.recipe?.image_url} alt={recipeDetails?.recipe?.title} 
            className="h-full w-full object-cover group-hover:scale-110 transition duration-300 ease"></img>
          </div>
        </div>

        <div className="flex flex-col gp-3 ">
          <span className='text-sm text-cyan-700 font-medium'>{recipeDetails?.recipe?.publisher}</span>
          <h3 className='font-bold text-2xl truncate text-black'>{recipeDetails?.recipe?.title}</h3>
           <div>
            <button onClick={()=>handleAddtofav(recipeDetails?.recipe)} className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
              {
               favorites && favorites.length>0 && favorites.findIndex(item=>item.id===recipeDetails?.recipe?.id) !== -1 ?'Remove from favorities':'Save as favorites'
              }
            </button>
           </div>
           <div className='mt-3'>
            <span className='text-2xl font-semibold text-black'>Ingredients:</span>
            <ul className='flex flex-col gap-3'>
              {
                recipeDetails?.recipe?.ingredients.map((ingrediant)=>
                <li>
                  <span className='text-2xl font-semibold text-black'>{ingrediant.quantity} { ingrediant.unit} {ingrediant.description}</span>
                  
                </li>
                )
              }
            </ul>
           </div>
        </div>

        

    </div>
    
  )
}

export default Details