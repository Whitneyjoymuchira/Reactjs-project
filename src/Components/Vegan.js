import React from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
//api=f1379539001f4bdcb1d2c610015bde00
  //const api='c27a2f1043aa482bac3fdc5009bb1cc4'

 function Vegan() {
  const [vegan, setVegan] = useState([])
  useEffect(() => {
    getVegan();

  }, [])


  
  const getVegan = async () => {
    const check=localStorage.getItem('vegan')
    if (check){
      setVegan(JSON.parse(check))}
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f1379539001f4bdcb1d2c610015bde00&number=12 &tags=vegetarian`)
      
    const data = await api.data()
      
    localStorage.setItem('vegan' ,JSON.stringify(data.recipes))
    console.log(data)
    setVegan(data.recipes)
      }
    
  
    
  };
  return (
    <div>

      <Wrapper>
        <h3> We got you,our Vegan friends</h3>
        <Splide options={
          {
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }
        }>
          {vegan.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                   <Link to={"/recipe/" + recipe.id }>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>


    </div>
  )


}
const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
`;

export default Vegan;