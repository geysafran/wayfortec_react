import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



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
        width: 4em;
        position: absolute;
    
    .ret{
        width: 100%;
    }
      
    .login{
        padding-top: 2vh;
        
    }
    .menu {
        
        width: 100%;
        text-align: center;
        
    }

    .box-login {
        margin: 9vh;
        width: 20%;
    }
    .item-menulist a {
        color: black;
        margin: 2vw;
        font-size: 1.5em;
        text-decoration: none;
      
        
    }

    a:hover {
        color: white;
        text-decoration: none;
    }

    .button-login {

    }

    .button-sigin{
        background-color: blue;
        width: 12vw;
        height: 6vh;
        border: none;
        border-radius: 9px;
        color: white;
}




`;
