import React from 'react'
import { Link } from 'react-router-dom'
import internimage from '../images/internship.jpg'
import mlimage from '../images/ml.jpg'

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

    h2{
    margin-bottom:2rem;
    color:#FEBE10;
    margin-top:500px
   
    }
    p{
    margin-bottom:2rem;
   
    }

   
   
`

export default function Certificate() {
    return (
        <Section className="certificatesection">
              <h1 className="certificateh1">Certificates</h1>
           <Container>
               <ColumnLeft className="istleft">
                <img className="interncertificate" style={{width:"300px",height:"380px"}} src={internimage}></img>
               <h2>Internship at Interns.Pk</h2>
               <p>I did my web-development internship in September 2019. I had given the tasks related to html,css and js. And I had done my wordpress project at the end of insternship.I learned about the basic knowledge.</p>
               <button className="button"><a className="a" href="https://www.youtube.com/watch?v=ybyPsQX9V1g&t=122s">View Video</a>
               
               </button>
               </ColumnLeft>
               <ColumnLeft className="secondleft">
               <img  src={mlimage}></img>
               <h2>Certificate for Applied Machine Learning in Python</h2>
               <p>I completed the course machine learning in python, it was great experience .This course comprises of four weeks that include information about some major algorithms of machine learning.</p>
               <button className="button"><a className="a" href="https://www.linkedin.com/posts/aliza-qamer-5a963219b_completion-certificate-for-applied-machine-activity-6689792422513311744-CUwX">View Details</a>
               </button>
               </ColumnLeft>
              
           </Container>
       </Section>
      
    )
}
