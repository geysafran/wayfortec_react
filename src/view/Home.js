import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import aaaa from '../img/aaaa.jpg';
import cursos from "../img/cursos.jpg";
import pessoas from "../img/pessoas(1).jpg";
import qualificacao from "../img/qualificacao(1).jpg";

import Css from '../img/css.svg'
import HTML from '../img/HTML.svg'
import Java from '../img/java.svg'
import JS   from '../img/javascript.svg'
import MySQL from '../img/mysql.svg'
import NodeJS from '../img/nodejs.svg'
import Python from '../img/python.svg'
import ReactJS from '../img/react.svg'


export default function Home() {
  return (
    <Body>
    <Figure>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={aaaa} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pessoas}
            alt="second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={qualificacao} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
   </Body>
   );
}


const Body = styled.body`
hr{
    border-color: #4F76E8;
    border-width: 0.1em;
    width: 45em;
    margin: 6em 0em 6em 10em;
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
