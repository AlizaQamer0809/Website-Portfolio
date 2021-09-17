import React,{useState,useRef,useEffect} from 'react'
import Profilepic from '../images/profilepicture.jpeg'
import styled, { css } from "styled-components"
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowBack,IoArrowForward} from 'react-icons/io5'

const HeroSection = styled.section`
    height:110vh;
    position:relative;
    max-height:1100px;
    overflow:hidden;
`

const HeroWraper = styled.div`
    height:100%;
    position:relative;
    width:100%;
    overflow:hidden;
    align-items:center;
    justify-content:center;
    display:flex;
`
const arrowButtons=css`
    width:50px;
    height:50px;
    color:#fff;
    transition:0.3s;
    cursor:pointer;
    padding:10px;
    margin-right:1rem;
    user-select:none;
    border-radius:50px;
    background:#000d1a;
    &:hover{
        background:#cd853f;
        transform:scale(1.05);
    }
`

const HeroSlide = styled.div`
    z-index:1;
    width:100%;
    height:100%
`;
const HeroSlider = styled.div`
    width:100vw;
    height:110vh;
    top:0;
    left:0;
    display:flex;
    position:absolute;
    align-items:center;
    justify-content:center;
     
    &::before{
        content:"";
        position:absolute;
        z-index:2;
        width:100%;
        height:100vh;
        bottom:0vh;
        left:0;
        overflow:hidden;
        opacity:0.4;
        background:linear-gradient(0deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.6) 100%)

    }
    `;
const HeroImage=styled.img`
    width:100%;
    height:100%;
    top:0;
    left:0;
    position:absolute;
    right:0;
    
`
const HeroContent = styled.div`
    display:flex;
    z-index:10;
    position:relative;
    flex-direction:column;
    max-width:1600px;
    width:calc(100%-100px);
    color:white;

    h1{
        font-weight:700;
        text-transform:uppercase;
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
        font-size:clamp(1rem,8vw,2rem);
        margin-bottom:0.8rem;
        text-align:left;

    }
    p{
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
        
        margin-bottom:1.2rem;
    }

`;
const Arrow=styled(IoMdArrowRoundForward)`
margin-left:0.5rem
`
const SliderButton=styled.div`
    position:absolute;
    z-index:10;
    bottom:30px;
    right:10px;
    display:flex;

`
const PrevArrow=styled(IoArrowBack)`
    ${arrowButtons}
`
const NextArrow=styled(IoArrowForward)`
    ${arrowButtons}
`
export default function Hero({ slides }) {
    const[current,setcurrent] = useState(0);
    const length=slides.length;
    const timeout = useRef(null);
    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setcurrent(current===length-1?0:current+1)
    }
    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setcurrent(current=== 0?length-1:current-1)
    }
    useEffect(() => {
        const nextSlide=()=>{
            setcurrent(current===length-1?0:current+1)
        }
        timeout.current=setTimeout(nextSlide,3000)
        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
       
    }, [current,length])
    return (
        <HeroSection className="herosection">
            <HeroWraper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index===current &&(
                                 <HeroSlider>
                                 <HeroImage  src={slide.image} />
                                <HeroContent>
                                       <img className="img" src={slide.image1}/>
                                         <h1>{slide.title}</h1>
                                         <p>{slide.education}</p>
                                         <p>{slide.extra}</p>
                                         <p>{slide.extra1}</p>
                                         <Button className="Button" to={slide.profilepath} primary="true"
                                         css={
                                             `max-width:160px;`}>
                                             {slide.label}
                                             <Arrow />
                                         </Button >
                                     </HeroContent>
                                 
                             </HeroSlider>

                            )}
                           

                        </HeroSlide>
                    )

                })}
                <SliderButton className="sliderbutton">
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButton>

            </HeroWraper>
        </HeroSection>
    )
}
