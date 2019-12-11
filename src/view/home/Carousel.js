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
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pessoas}
              alt="second slide"
            />
  
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Extras} alt="Third slide" />
  
            <Carousel.Caption>
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
        width: 70vw;
        border-width: 0.1em;
        margin: 15vw;
    }
`;