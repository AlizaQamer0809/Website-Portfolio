import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled,{css} from "styled-components"
import { menudata } from '../data/MenuData'
import {Button} from './Button'
import {FaBars}from 'react-icons/fa'

const Nav=styled.nav`
    height:60px;
   display:flex;
    padding:1rem 2rem;
    z-index:100;
    justify-content:space-between;
    position:fixed;
    width:100%;
   
`;
const NavLinks=css`
    color:white;
    padding:0 1rem;
    align-items:center;
    cursor:pointer;
    text-decoration:none;
    height:100%
   
`;
const Logo=styled(Link)`
    font-style:italic;
    ${NavLinks};
    font-size:2rem;
   
    

   


`;
const MenuBars=styled(FaBars)`
    display:none;
    
    @media screen and (max-width:768px){
        display:block;
        cursor:pointer;
        color:white
    }
`;
const NavMenu=styled.div`
    align-items:center;
    display:flex;
    margin-right:-48px;
   
    @media screen and (max-width:768px){
        display:none;
    }

`;
const NavMenuLink=styled(Link)`
     ${NavLinks};
     font-size:1.1rem;
     &:hover{
        color:#FEBE10;
    }
    
     
     
`;
const NavBtn=styled.div`
    margin-right:24px;
    align-items:center;
    display:flex;

    @media screen and (max-width:768px){
        display:none;
       
    }

`
export default function Navbar({toggle}) {
    const [navbar, setnavbar] = useState(false);
    const changeBackground=()=>{
        if(window.scrollY>=60){
            setnavbar(true)

        }else{
            setnavbar(false)
        }
    };
    window.addEventListener("scroll",changeBackground)
    return (
        <Nav className={navbar?"active":"notactive"}>
        <Logo to="/">AQ</Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
            {menudata.map((item,index)=>(
                <NavMenuLink  to={item.link} key={index}>{item.title}</NavMenuLink>

            ))}
        </NavMenu>
        <NavBtn>
            <Button className="Button" to="/contact" primary="true">Contact Me</Button>
        </NavBtn>
        </Nav>
    )
}
