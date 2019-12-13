import React from 'react'
import styled from 'styled-components';

import Retangulo2 from '../img/Rectangle2.png'

export default function Rodape(){
    return(
        <Footer>
            <div className="container-footer">
                <div className="footer-menu">
                    <a href="#" className="item-fter">Página inicial</a>
                    <a href="#" className="item-fter">Sobre nós</a>
                    <a href="#" className="item-fter">Serviços</a>
                    <a href="#" className="item-fter">Contato</a>
                </div>
                <div className="footer-login">
                    <a href="#" className="item-fter">Fazer login</a>
                    <a href="#" className="item-fter">Fazer inscrição</a>
                </div>

            </div>
        </Footer>
    );
}

const Footer = styled.footer`
   .container-footer{
    width: 100%;
    height: 34vh;
    background-image: linear-gradient(to top,#4f76e8,white);
   justify-content: space-between;
    display: flex;
    align-items: flex-end;


   }

   .item-fter a:hover {
       text-decoration: none;
       color: white;
   }

   .footer.menu {
       display: flex;
       flex-direction: column;
       

   }
   .footer-login{



   }

   .item-fter{
       text-decoration: none;
       color: white;
       font-size: 1rem;
       margin: 2vh;
       font-size: 1em;
       display: flex;
   }
       



   }

`;