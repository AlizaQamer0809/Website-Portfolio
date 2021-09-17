import React from 'react'
import contactimg from '../images/contact.jpg'
import emailpic from '../images/mail.jpg'
import smimg from '../images/sm.jpg'
import twitterpic from '../images/twitter.jpg'
import linkpic from '../images/link.jpg'
import fbpic from '../images/fb.jpg'
import instapic from '../images/insta.jpg'
export default function Contact() {
    return (
        <div className="container">
          
                <div className="maindiv">
                    <img className="contactimg" src={smimg}></img>
                    <img  className="image" style={{width:"45px",height:"30px",marginTop:"50px"}} src={emailpic}></img> 
                    <p style={{textDecoration:"none"}} className="contact__btn" >alizaqamer4008@gmail.com</p>
                   <img style={{width:"45px",height:"30px",marginTop:"50px"}} src={linkpic}></img> 
                    <a style={{textDecoration:"none"}} className="contact__btn" href="https://www.linkedin.com/in/aliza-qamer-5a963219b">https://www.linkedin.com/in/aliza-qamer-5a963219b/</a>
                    <img style={{width:"45px",height:"30px",marginTop:"50px"}} src={fbpic}></img> 
                    <a style={{textDecoration:"none"}} className="contact__btn" href="https://www.facebook.com/aliza.qamer.7">https://www.facebook.com/aliza.qamer.7</a>
                    <img  style={{width:"45px",height:"30px",marginTop:"50px"}} src={instapic}></img> 
                    <a style={{textDecoration:"none"}} className="contact__btn" href="https://www.instagram.com/aliza_qamer/">https://www.instagram.com/aliza_qamer/</a>
           
           
            </div>
           
        </div>
    )
}
