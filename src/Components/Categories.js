import {faPizzaSlice,faHamburger, FaPizzaSlice} from "react-icons/fa"
import {GiNoodles,GiChopsticks ,GiHamburger} from "react-icons/gi"
import styled from "styled-components"
import React from 'react'
import { NavLink } from "react-router-dom"

export default function Categories() {
  return (
    <div>
      <div>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </div>
      <div>
        <GiHamburger/>
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles/>
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </div>
    </div>
  )
}
