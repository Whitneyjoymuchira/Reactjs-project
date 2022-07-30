import { FaPizzaSlice} from "react-icons/fa"
import {GiNoodles,GiChopsticks ,GiHamburger} from "react-icons/gi"
import styled from "styled-components"
import React from 'react'
import { NavLink } from "react-router-dom"

export default function Categories() {
  return (
    <List>
      <SLink to= {'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink to= {'/cuisine/American'}>
        <GiHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to= {'/cuisine/Thai'} >
        <GiNoodles/>
        <h4>Thai</h4>
      </SLink >
      <SLink to= {'/cuisine/Japanese'} >
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}
const List=styled.div`
display:flex;
justify-content:center;
margin:2rem;`
const SLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;

`