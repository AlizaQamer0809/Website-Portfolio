import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Certificate from '../components/Certificate'
import { SliderData } from '../data/SliderData'


export default function Homepage() {
    return (
        <div>
            <Hero slides={SliderData}/>
            <Project/>
            <Certificate/>
           
        </div>
    )
}
