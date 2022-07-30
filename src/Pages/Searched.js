import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const[searchedRecipes,setSearchedRecipes]=useState([])
    let params=useParams()
      
    const getSearched=async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f1379539001f4bdcb1d2c610015bde00&query=${name}`)
      const recipes=await data.json()
    setSearchedRecipes(recipes.results)
    };
useEffect(()=> {
    getSearched(params.search)
},[params.search])

  return (
    <Grid>
        {searchedRecipes.map((item)=>{
            return(
                <Card key={item.id}>
                <img src={item.image} alt={item.title}/>
                <h4> {item.title}</h4>

                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: min(500px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched