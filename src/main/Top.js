import React from 'react';
import styled from 'styled-components';


import logo from '../img/logo1.svg';
import login from '../img/login.svg';

export default function Top(){
    return(
        <Header> 
            <div className="container-menu">
                <img className="logo" src={logo} alt="Logo" />
                <nav className="menu">
                    <a href="#" className="item-menulist">Página inicial</a>
                    <a href="#" className="item-menulist">Sobre nós</a>
                    <a href="#" className="item-menulist">Serviços</a>
                    <a href="#" className="item-menulist">Contato</a>
                </nav>
                <div className="box-login">
                    <button className="button-login">      
                        <img src={login} alt="login" className="img-login"/><p className="submit-login">Entrar</p>
                    </button>
                    
                    <button className="button-sigin">Inscrever-se</button>
                </div>
            </div>
        </Header>
    );
}

const Header = styled.header`
    .container-menu{
       display: flex;
       padding: 3vw;
       margin-bottom: 10vh;
       justify-content: center;
       height: 29vh;
       align-items: center;
       background-image: linear-gradient(to top, white , #3e6fff);
    }
 
    .logo{
        width: 11em;
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
    .item-menulist {
        
        font-size: 1.3em;
        
    }
    a {
        padding: 2vw;
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: white;
        text-decoration: none;
    }
    .button-login{
        display: flex;
        background: none;
        border: none;
        text-decoration: none;
        align-items: center;
        outline: none;

    }
    .img-login {
        color: blue;
        padding: 0 1vw 0 0;
    }

    .submit-login {
        color: black;
        height: 2vh;
        padding: 0 2vw 0 0;
    }
    .button-sigin{
        background-color: blue;
        width: 12vw;
        height: 6vh;
        border: none;
        border-radius: 9px;
        color: white;
    }

    .box-login{
        display: flex;
        align-items: center;

    }
`;