import { FaPizzaSlice} from "react-icons/fa"
import {GiNoodles,GiChopsticks ,GiHamburger} from "react-icons/gi"
import styled from "styled-components"
import React from 'react'
import { NavLink } from "react-router-dom"

export default function Categories() {
  return (
    <List>
      <NavLink to= {'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to= {'/cuisine/American'}>
        <GiHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink to= {'/cuisine/Thai'} >
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink >
      <NavLink to= {'/cuisine/Japanese'} >
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </List>
  )
}
const List=styled.div`
display:flex;
justify-content:center;
margin:2rem;`