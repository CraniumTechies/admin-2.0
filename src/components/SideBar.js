//internal assets
import React from 'react';
import Logo from "../assets/Brand Logo@2x.png"
import Humburger from "../assets/Icon awesome-user-circle.png"

//external assets
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//react styling
const BrandLogo = styled.img`
width: 3rem;
height: 3rem;
position: relative;
margin-left: 1rem;
margin-top: 1rem;
cursor: pointer;
`
const SideNav = styled.section`
width: 5rem;
height: 50rem;
background-color: #14CC00;
border-bottom-right-radius: 20px;
border-top-right-radius: 20px;

&:hover{
    width: 15rem;
    transition: 0.3s ease-in;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
`
const UserImage = styled.img`
width: 2rem;
height: 2rem;
position: absolute;
margin-top: 6rem;
margin-left: -2.5rem;
cursor: pointer;
`
const ListSection = styled.section`
height: fit-content;
width: fit-content;
border: 1px black solid;
`

const SideBar = () => {
    return (
        <SideNav>
            <Link to='/dashboard'>
            <BrandLogo src={Logo} alt="brand_label" />
            </Link>
            <Link to='/dashbaord/users$profile'>
            <UserImage src={Humburger} alt="burger"/>
            </Link>
        </SideNav>
    )
}

export default SideBar
