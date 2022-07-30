import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'


export default function Cuisine() {
const [cuisine,setCuisine]=useState([])
let params=useParams()


    const getCuisine=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c27a2f1043aa482bac3fdc5009bb1cc4&cuisine=${name}`)
  const recipes=await data.json()
setCuisine(recipes.results)
};
useEffect(()=> {
   // getCuisine('italian')
    console.log(params.type)
},[params.type]);





    return 
<div>
    dkd
</div>
}
