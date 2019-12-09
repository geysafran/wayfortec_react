import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import cursos from "../img/cursos.jpg";
import pessoas from "../img/pessoas(1).jpg";
import qualificacao from "../img/qualificacao(1).jpg;

export default function Cursos() {
  return (
    <Figure>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={cursos} alt="First slide" />
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
  );
}

const Figure = styled.figure``;
