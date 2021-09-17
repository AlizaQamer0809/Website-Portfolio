import React from 'react'
import "./Footer.css"
import emailpic from '../images/mail.jpg'
export default function Footer() {
    return (
       <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Aliza Qamer</h1>
              
          <h2>Contact Information</h2>
          
          <address>
         
            <img style={{width:"45px",height:"30px",marginTop:"50px"}} src={emailpic}></img> 
            <p className="footer__btn" >alizaqamer4008@gmail.com</p>
          </address>
        </div>
        
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">About Me</h2>
      
            <div className="nav__div">
                <p>Software Enginnering Student</p>
                <p>FrontEnd Developer</p>
                <p>Eager to Learn</p>
                <p>Team Lead(WebndIt)</p>
               
            </div>
          </li>
          
         
          
          
        </ul>
        
        <div className="legal">
          <p>&copy; All rights reserved.</p>
          
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#" target="_blank"></a></li>
              <li><a className="instagram" href="https://www.instagram.com/aliza_qamer/" target="_blank"></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/aliza-qamer-5a963219b/" target="_blank"></a></li>
                
            </ul>
          </div>
        </div>
      </footer>
      </div>
    )
}
