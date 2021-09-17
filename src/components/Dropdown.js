import React from 'react'
import styled from 'styled-components'
import { menudata } from '../data/MenuData'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
const Dropdowndiv=styled.div`
    width:100%;
    height:100%;
    top:0;
    left:0;
    dispay:grid;
    position:fixed;
    z-index:999;
    align-items:center;
    opacity:${({isOpen})=>(
        isOpen? "1":"0"
    )};
    top:${({isOpen})=>(
        isOpen? "0":"-100%"
    )};
    transition:0.3s ease-in-out;
    background:#FEBE10;
`
const Icon=styled.div`
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    position:absolute;
    font-size:2rem;
    outline:none;
    cursor:pointer;
`
const CloseIcon=styled(FaTimes)`
    color:#000d1a;
`
const DropdownWrapper=styled.div``

const Dropdownmenu=styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(4,80px);
    margin-bottom:4rem;
    text-align:center;
    margin-top:4rem;
   
    @media screen and (max-width:480px){
        grid-template-rows:repeat(4,60px);
       
    }

`
const DropdownMenuLink=styled(Link)`
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    cursor:pointer;
    font-size:1.3rem;
    transition:0.3s ease-in-out;

    &:hover{
        color:#000d1a;
    }
    
`
const BtnWrapper=styled.div`
display:flex;
justify-content:center;
`

export default function Dropdown({isOpen,toggle}) {
    return (
        <Dropdowndiv isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <Dropdownmenu>
                    {menudata.map((item,index)=>(
                        <DropdownMenuLink to={item.link} key={index}>{item.title}</DropdownMenuLink>

            ))}
                </Dropdownmenu>
                <BtnWrapper>
                    <Button big="true" primary="true" to="/contact">Contact Me</Button>
                </BtnWrapper>
            </DropdownWrapper>
        </Dropdowndiv>
    )
}
