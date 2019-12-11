import React from 'react'
import styled from 'styled-components';

import Retangulo2 from '../img/Rectangle2.png'

export default function Rodape(){
    return(
        <Footer>
            <figure>
                <img src={Retangulo2} alt="Rodapé"/>
            </figure>
        </Footer>
    );
}

const Footer = styled.footer`
    figure{
        padding: 0em;
        margin: 0em;
    }
    img{
        width: 100%;
    }
`;