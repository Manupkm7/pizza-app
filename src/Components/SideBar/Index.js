import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'

function SideBar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Postres</SidebarLink>
                <SidebarLink to='/'>Menu Completo</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Ordene Ahora</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar
