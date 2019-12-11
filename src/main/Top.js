import React from 'react';
import styled from 'styled-components';

import retangulo from '../img/Rectangle.png';
import logo from '../img/logo1.svg';
import login from '../img/login.svg';

export default function Top(){
    return(
        <Header> 
            <div className="container-menu">
            <img className="logo" src={logo} alt="Logo" />
                <nav className="menu">
                        <a href="#" className="item-menu">Home</a>
                        <a href="#" className="item-menu">About</a>
                        <a href="#" className="item-menu">Services</a>
                        <a href="#" className="item-menu">Contact</a>
                    </nav>
                
                        <img className="login" src={login} alt="login" />
                   
            
                </div>
        </Header>
    );
}

const Header = styled.header`
    .container-menu{
       display: flex;
       margin-bottom: 10vh;
      justify-content: center;
       height: 29vh;
       background-image: linear-gradient(to top, white , #3e6fff);
    }

 
    .logo{
        width: 12em;
      
    }
    .login{
        padding-top: 2vh;
        
    }
    .menu {
        width: 61%;
        font-size: 1.6em;
        text-align: center;
        color: blue;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        margin: 3vw;
        color: blue
        font-weigth: 700;
    }


`;
