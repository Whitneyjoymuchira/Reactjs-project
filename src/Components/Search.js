import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

function Search(){
    const [input,setInput] = useState("");
    const navigate = useNavigate();
  
    const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/" +input);
    };
  
    return (
      <FormStyle  onSubmit={submitHandler}>
        <div>
          <FaSearch/>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </FormStyle>
    );
  };
  
  const FormStyle = styled.form`

    margin: 0 20rem;
    position: relative;
    width:100%
    div{
      width: min(550px, 100%);
      margin: 0 auto;
    }
     
    
    input {
      background:gray;
      font-size: 0.8rem;
      color: white;
      padding: 1rem 3rem;
      border-radius: 1rem;
      border: none;
      outline: none;
      
    }
    svg {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(100%, -50%);
      color: white;
    }
  `;
  export default Search;

