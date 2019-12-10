import React from 'react';
import styled from 'styled-components';

import retangulo from '../img/Rectangle.png';
import logo from '../img/logo2.svg';
import login from '../img/login.svg';

export default function Top(){
    return(
        <Header> 
            <figure>
                <img class="ret" src={retangulo} alt='Topo da página'/>
                <img class="logo" src={logo} alt='Logo' />
                <img class="login" src={login} alt="login" />
            </figure>
        </Header>
    );
}

const Header = styled.header`
    .ret{
        width: 100%;
    }
    
    .logo{
        width: 12em;
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
