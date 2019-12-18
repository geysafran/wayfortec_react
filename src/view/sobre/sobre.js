import React from 'react';
import styled from 'styled-components';

import temp from '../../img/temp.png'

export default function Sobre(){
    return(
        <Section>
            <h1>Quem somos</h1>
            <hr/>
            <h2>Missão</h2>
            <p>Alcançar e prover conhecimento de tecnologia à todos de forma acessível.</p>
            <hr/>
            <h2>Visão</h2>
            <p>Ser reconhecido por ter o melhor acesso, de forma transformadora, à cursos de tecnologia.</p>
            <hr/>
            <h2>Valores</h2>
            <p>Praticidade, ser divertido, ser dinâmico, abrir os olhos através do conhecimento.</p>
            <hr/>
            <figure>
                <img src={temp} alt='/'/>
                <img src={temp} alt='/'/>
                <p>
                Lorem ipsum dui proin lobortis etiam fames dictum, lorem quis orci sodales a ut viverra leo, tristique mauris placerat class aptent curabitur. 
                dictum pharetra egestas phasellus turpis gravida sagittis blandit tempus</p>
                <p>
                Lorem ipsum dui proin lobortis etiam fames dictum, lorem quis orci sodales a ut viverra leo, tristique mauris placerat class aptent curabitur. 
                dictum pharetra egestas phasellus turpis gravida sagittis blandit tempus</p>
                <img src={temp} alt='/'/>
                <img src={temp} alt='/'/>
                <p>
                Lorem ipsum dui proin lobortis etiam fames dictum, lorem quis orci sodales a ut viverra leo, tristique mauris placerat class aptent curabitur. 
                dictum pharetra egestas phasellus turpis gravida sagittis blandit tempus</p>
                <p>
                Lorem ipsum dui proin lobortis etiam fames dictum, lorem quis orci sodales a ut viverra leo, tristique mauris placerat class aptent curabitur. 
                dictum pharetra egestas phasellus turpis gravida sagittis blandit tempus</p>
                <img src={temp} alt='/'/>
                <img src={temp} alt='/'/><p>
                Lorem ipsum dui proin lobortis etiam fames dictum, lorem quis orci sodales a ut viverra leo, tristique mauris placerat class aptent curabitur. 
                dictum pharetra egestas phasellus turpis gravida sagittis blandit tempus</p>
                <p>
                Lorem ipsum dui proin lobortis etiam fames dictum, lorem quis orci sodales a ut viverra leo, tristique mauris placerat class aptent curabitur. 
                dictum pharetra egestas phasellus turpis gravida sagittis blandit tempus</p>
            </figure>
        </Section>
    );
}

const Section = styled.section`
    hr{
        border-color: #4F76E8;
        width: 70vw;
        border-width: 0.1em;
        margin: 15vw;
    }
    figure{
        align-content: space-around;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 15em;
    }  
    img{
        width: 18vw;
    }  
`;