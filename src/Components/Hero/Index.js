import React, { useState } from 'react'
import Navbar from '../Navbar/Index'
import SideBar from '../SideBar/Index'
import {HeroContainer, HeroBtn,HeroContent,HeroH1,HeroItems,HeroP} from './HeroElements'

function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    
    return (
        <HeroContainer>
        <Navbar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
            <HeroItems>
                <HeroH1>La mejor pizza siempre</HeroH1>
                <HeroP>Lista en 10 minutos!</HeroP>
                <HeroBtn>Ordene Ahora</HeroBtn>
            </HeroItems>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero
