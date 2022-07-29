import React, {useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
          <Wrapper>
            <h3> Regular Picks</h3>
            {popular.map((recipe)=>{
              return(
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image}alt={recipe.title} />
                  </Card>
              )
            })}
          </Wrapper>
        )
      })}
    </div>
  )
  
  
  }
  const Wrapper=styled.div`
  margin:4rem 0rem;
  `;
  const Card=styled.div`
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
img{
  border-radius:2rem;

}


  `;
export default Popular
