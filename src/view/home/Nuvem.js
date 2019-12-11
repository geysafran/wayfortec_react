import React from "react";
import styled from "styled-components";

import Css from '../../img/css.svg';
import HTML from '../../img/HTML.svg';
import Java from '../../img/java.svg';
import JS   from '../../img/javascript.svg';
import MySQL from '../../img/mysql.svg';
import NodeJS from '../../img/nodejs.svg';
import Python from '../../img/python.svg';
import ReactJS from '../../img/react.svg';

export default function Nuvem(){
    return(
        <Section>
            <img src={MySQL}   alt="MySQL" />
            <img src={HTML}    alt="HTML" />
            <img src={ReactJS} alt="React" />
            <img src={JS}      alt="JavaScript" />
            <p>Se inscreva nos cursos mais procurados do mercado!</p>
            <img src={Css}    alt="CSS" />
            <img src={NodeJS} alt="NodeJS" />
            <img src={Python} alt="Python" />
            <img src={Java}   alt="Java" />
            <hr/>
        </Section>
);  
}

const Section = styled.section`
  margin: 0em;
  padding: 0em;
  display: grid;
  grid-template-columns: 5.5em 5.5em 5.5em;
  grid-template-rows: 12em 12em 12em;
  justify-content: space-around;

  hr{
    border-color: #4F76E8;
    width: 70vw;
    border-width: 0.1em;
    margin: 15vw;
}
  img{
    width: 15vw;
  }
`;