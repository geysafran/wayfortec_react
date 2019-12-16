import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import retangulo from '../img/Rectangle.png';
import logo from '../img/logo1.svg';
import login from '../img/login.svg';

import teste from '../img/teste.svg';

export default function Top(){
    return(
        <Header> 
            <figure>
                <Link to='../sobre'><img class="oi" src={teste} alt="teste" /></Link>
                <img class="ret" src={retangulo} alt='Topo da página'/>
                <Link to='/'><img class="logo" src={logo} alt='Logo' /></Link>  
                <Link to='../login'><img class="login" src={login} alt="login" /></Link>
            </figure>
        </Header>
    );
}

const Header = styled.header`
    .oi{
        width: 4em;
        position: absolute;
    }
    .ret{
        width: 100%;
    }
    
    .logo{
        width: 25vw;
        position: absolute;
        left: 30px;
        padding-top: 1.5em;
    }
    .login{
        padding-top: 2em;
        position: absolute;
        right: 5em;
        width: 2em;
    }
`;
