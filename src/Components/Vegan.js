import React from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState,useEffect } from 'react';
//api=f1379539001f4bdcb1d2c610015bde00

export default function Vegan() {
  const [vegan, setVegan] = useState([])


  //useeffect
  useEffect(() => {
    getVegan();

  }, [])


  const getVegan = async () => {
    const check = localStorage.getItem('vegan');
    if (check) {
      setVegan(JSON.parse(check))
    } else {

    

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f1379539001f4bdcb1d2c610015bde00&number=12 &tags=vegetarian`)
    const data = await api.json()
    console.log(data)
    localStorage.setItem("vegan", JSON.stringify(data.recipes))
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
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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
  margin:4rem 0rem;
  `;
const Card = styled.div`
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative;
img{
  border-radius:2rem;
   position:absolute;
   left:0,
   width:100%,
   object-fit:cover; 
}
p{
  position:absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform:translate(-50%,0%);
  color:white;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
}
  `;
const Gradient = styled.div`
  z-index:3;
  positio:absolute;
  width:100%;
  height:100%
  background:linear-gradient (rgba(0,0,0,0),rgba(0,0,0,0.5 ))`