import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import aaaa from '../../img/aaaa.jpg';
import cursos from "../../img/cursos.jpg";
import pessoas from "../../img/tocarousel2.jpg";
import Extras from "../../img/tocarousel3.jpg";

export default function Carousel1() {
    return (
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
            <img className="d-block w-100" src={Extras} alt="Third slide" />
  
            <Carousel.Caption>
              <h3 class="carousel">Extras</h3>
              <p class="carousel">
                
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr/>
      </Figure>
);
}
const Figure = styled.figure`
    hr{
        border-color: #4F76E8;
        width: 45em;
        margin: 6em 0em 6em 10em;
}
    p{
        color: #4f76e8;
    }
    h3{
        color: #4f76e8;
    }
`;