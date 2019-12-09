import React from 'react'
import styled from 'styled-components'

import retangulo from '../img/Rectangle.png'

export default function Top(){
    return(
        <Header> 
            <figure>
                <img src={retangulo} alt='Topo da pÃ¡gina'/>
            </figure>
        </Header>
    );
}

const Header = styled.header`
    img{
        width: 100%;
    }
`;