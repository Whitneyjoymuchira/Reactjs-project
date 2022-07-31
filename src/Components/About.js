
import { Link } from "react-router-dom";
import React from 'react'
import ContactUs from "../Pages/ContactUs";

function About() {
  return (<div>
    <h2> ABOUT</h2>
       
   < Link to={<ContactUs/>}>
   </Link>
   </div>
  )
}

export default About