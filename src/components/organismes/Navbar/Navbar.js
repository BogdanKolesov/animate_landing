import React from 'react';
import styled from 'styled-components';
import { menuData } from '../../../data/MenuData';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './Navbar.elements';
import { Button } from '../../atoms';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>Logo</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button primary to='/contact'>Contact us</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;