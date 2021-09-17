import React from 'react'
import { Link } from 'react-router-dom'
import storeimage from '../images/store-furniture.PNG'
import resortimage from '../images/resort-project.PNG'
import styled   from 'styled-components'
const Section=styled.section`
    padding-top:-100px;
    width:100%;
    height:100%
`
const Container=styled.div`
    padding:3rem calc((100vw-1300px)/2);
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:800px;

    @media screen and (max-width:768px){
        grid-template-columns:1fr ;
    }

`
const ColumnLeft=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    line-height:1.4;
    padding-top:-40px;
    padding:1rem 2rem;

    h2{
        margin-bottom:2rem;
        margin-top:-300px;
        color:#FEBE10;
       
    }
    p{
        margin-bottom:2rem;
       
    }


`
const ColumnRight=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:1rem 2rem;

img{
    width:90%;
    height:45%;
    object-fir:cover;
    margin-top:-300px;

@media screen and (max-width:768px){
    width:480px;
    height:380px;
    margin-top:-300px
}}

@media screen and (max-width:500px){
    width:380px;
    height:380px;
    margin-top:-240px
}}
@media screen and (max-width:500px){
    width:280px;
    height:250px;
    margin-top:-150px
}}
  
   
   
`

export default function Project() {
   
    return (
       <Section className="projectsection">
            <h1 className="main-heading">My Projects</h1>
           <Container>
               <ColumnLeft>
              
               <h2>Store Furniture</h2>
               <p>I have completed my project named store furniture. This is React based website. I learned about react hooks. I got knowledge of how to use useContext hook to make my code more readable and to use Producer and Consumer to work with raw data.</p>
               <button className="button"><a className="a" href="https://github.com/AlizaQamer0809/store-furniture">View Project</a>
               
               </button>
               </ColumnLeft>
               <ColumnRight>
              
               <img src={storeimage}></img>
           
              
               </ColumnRight>
               <ColumnLeft className="second">
              
              <h2>Resort Project</h2>
              <p>Resort Project is React based project. I have done this project in March 2021.You can get an overview of different resorts , different rooms present and about their prices. There is also functionality of Room Filter, select room on basis of number of people, price and other factors. It also has an information of services available on particular resort.</p>
              <button className="button"><a className="a" href="https://github.com/AlizaQamer0809/react-resort-project/">View Project</a>
              
              </button>

              </ColumnLeft>
              <ColumnRight>
               <img  style={{width:"480px",height:"380px"}}  src={resortimage}></img>
               </ColumnRight>
           </Container>
       </Section>
    )
}
