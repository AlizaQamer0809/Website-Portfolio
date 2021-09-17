import styled from "styled-components";
import { Link } from "react-router-dom";
import button from '../images/button.jpg'
export const Button=styled(Link)`

    
  
    white-space:nowrap;
    outline:none;
    min-width:100px;
    max-width:200px;
    border:none;
    display:flex;
    text-decoration:none;
    transition:0.3s;
    justify-content:center;
    align-items:center;
    padding:${({big})=>(big?"16px 40px":"14px 24px")};
    color:${({primary})=>(
        primary? "#FEBE10":"white"
    )};
    &:hover{
        transform:translateY(2px)
    }
`