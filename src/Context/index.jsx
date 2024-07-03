import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom"
export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParam,setsearchparam] = useState('');
    const [loading,setloading]=useState(false);
    const [receipeList,setreceipeList]=useState([])
    const [recipeDetails,setreceipeDetails]=useState(null)
    const [favorites,setfavourites] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json()
            if (data?.data?.recipes){
              setreceipeList  (data?.data?.recipes)
              setloading(false)
              setsearchparam('');
              navigate('/')
              console.log(data)
            }
        }catch(e){
            console.log(e)
            setloading(false)
            setsearchparam('')
        }
    }
    function handleAddtofav(getCurrentItem){
        let cpyFavorities = [...favorites];
        const index = cpyFavorities.findIndex(item=>item.id===getCurrentItem.id)
        if(index===-1){
            cpyFavorities.push(getCurrentItem)
            }else{
                cpyFavorities.splice(index)
        }
        setfavourites(cpyFavorities)
    }

    return(
    <GlobalContext.Provider value={{searchParam,setsearchparam,handleSubmit,loading,receipeList,recipeDetails,setreceipeDetails,handleAddtofav,favorites}}>
        {children}
    </GlobalContext.Provider>
    )
}