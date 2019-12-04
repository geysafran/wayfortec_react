import React from 'react'
import styled from 'styled-components'

import retangulo from '../img/Rectangle.png'

export default function Top(){
    return(
        <Header> 
            <figure>
                <img src={retangulo} alt='Topo da página' width="auto"/>
            </figure>
        </Header>
    );
}

const Header = styled.header`
    padding: 0em;
    margin: 0em;
`;