import React, {useEffect, useState } from 'react'


 function Popular() {
  //const api='c27a2f1043aa482bac3fdc5009bb1cc4'
  
  const[popular,setPopular]=useState([])


    //useeffect
    useEffect(() => {
      getPopular();
    
    },[])
    

    const getPopular= async()=>{
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=c27a2f1043aa482bac3fdc5009bb1cc4&number=12`)
        const data=await api.json()
        console.log(data)
        setPopular(data.recipes)
        
        
    };
  return (
    <div>
      {popular.map((recipe)=>{
        return(
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
  
  
  }
export default Popular