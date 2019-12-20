import React from 'react'
import styled from 'styled-components';


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
   justify-content: center;
    display: flex;
    align-items: flex-end;


   }


   .item-fter:hover {
       text-decoration: none;
       font-size: 1rem;
       color: white;
     
    font-size: 0.8em;
}
   }

   .footer.menu {
       display: flex;
       flex-direction: column;
      
}
       

   }
   .footer-login{
        align-self: center;
        height: 0vh;

   }

   .item-fter{
        text-decoration: none;
        color: #6a6b6d;
        font-size: 0.8em;
       
        margin: 2vh;
     
        display: flex;
   }
       



   }

`;