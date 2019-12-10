import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';

import aaaa from '../img/aaaa.jpg';
import cursos from "../img/cursos.jpg";
import pessoas from "../img/pessoas(1).jpg";
import qualificacao from "../img/qualificacao(1).jpg";

import Css from '../img/css.svg';
import HTML from '../img/HTML.svg';
import Java from '../img/java.svg';
import JS   from '../img/javascript.svg';
import MySQL from '../img/mysql.svg';
import NodeJS from '../img/nodejs.svg';
import Python from '../img/python.svg';
import ReactJS from '../img/react.svg';

import Arrow from '../img/Arrow2.svg';

export default function Home() {
  return (
    <Body>
    <Figure>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={aaaa} alt="First slide" />
          <Carousel.Caption>
            <h3 class="carousel">Cursos de Qualidade</h3>
            <p class="carousel">Sites parceiros</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pessoas}
            alt="second slide"
          />

          <Carousel.Caption>
            <h3 class="carousel">Seja você a inovação</h3>
            <p class="carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={qualificacao} alt="Third slide" />

          <Carousel.Caption>
            <h3 class="carousel">Extras</h3>
            <p class="carousel">
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Figure>
    <hr/>
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
   </Section>
   <hr/>
   <Sec>
    <section class="intro">
      <h1>Módulo introdutório</h1>
      <ul>
        <li> A importância da Tecnologia </li>
        <li> Introdução ao mundo digital </li>
        <li> Introdução à lógica de programação </li>
        <li> Matemática aplicada à computação </li>
        <li> Certificação </li>
      </ul>
    </section>
    <img src={Arrow} alt="Seta"/>
    <section class="cursos">
      <h1>Cursos</h1>
      <p> </p>
    </section>
    <img src={Arrow} alt="Seta"/>
    <section class="exc">
      <h1>Módulo exclusivo</h1>
      <p>Modulo exclusivo para alunos cadastrados com baixa renda, entenda como funciona e como entrar no mercado de trabalho.</p>
    </section>
    <section class="eve">
      <br/>
      <h1>WayToTheWorld</h1>
      <p>Para você que deseja mostrar tudo que aprendeu com os cursos que você escolheu, inscreva-se para no WayToTheWorld e mostre sua capacidade em um evento de tecnologia exclusivo para nosso alunos.</p>
    </section>
   </Sec>
   </Body>
   );
}
const Sec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Body = styled.body`
  .carousel{
    color: blue;
  }
  hr{
    border-color: #4F76E8;
    border-width: 0.1em;
    width: 45em;
    margin: 6em 0em 6em 10em;
  }
  .eve p{
    max-width: 15em;
  }
  .eve{
    padding-top: 1em; 
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;    
    border: 3px solid #4F76E8;
    background: #c4c4c4;
    margin: 7em 10em 0em 10em;
    text-align: center;
    border-radius: 30px;
  }
  .exc{
    padding-top: 1em; 
    padding-bottom: 1em;
    border: 3px solid #c4c4c4;
    background: #4F76E8;
    text-align: center;
    margin: 1em 10em 0em 10em;
    border-radius: 30px;
  }
  .intro p{
    font-size: 1.5em;
  }
  .intro ul{
    list-style: none;
  }
  .cursos{
    padding-top: 1em; 
    padding-bottom: 1em;
    border: 3px solid #4f76e8;
    background: #c4c4c4;
    border-radius: 30px;
    text-align: center;
    margin: 1em 10em 0em 10em;
  }
  .intro{
    padding-top: 1em; 
    padding-bottom: 1em;
    border: 3px solid #c4c4c4;
    background: #4F76E8;
    text-align: center;
    margin: 1em 10em 0em 10em;
    border-radius: 30px;
  }
`;
const Section = styled.section`
  margin: 0em;
  padding: 0em;
  display: grid;
  grid-template-columns: 8em 5em 8em;
  grid-template-rows: 12em 12em 12em;
  justify-content: space-around;

  img{
    width: 8.5em;
  }
`;

const Figure = styled.figure`
`;