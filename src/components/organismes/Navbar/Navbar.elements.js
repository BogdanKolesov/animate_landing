import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaCross } from 'react-icons/fa';


export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: red;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

`

export const Logo = styled(Link)`
    ${NavLink}
    font-weight: bold;
    text-transform: uppercase;
    font-style: italic;
    font-weight: lighter;
`;

export const MenuBars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        box-sizing: contain;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%);
    }
`;

export const NavMenu = styled.p`
    display: flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px){
        display: none;
    }

`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`;
export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;