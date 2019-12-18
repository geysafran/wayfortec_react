import React from "react";
import styled from "styled-components";

import retangulo2 from "../img/Rectangle2.png";

export default function Rodape() {
  return (
    <Rod>
      <figure>
        <img src={retangulo2} alt="Fundo da página"/>
      </figure>
    </Rod>
  );
}

const Rod = styled.footer`
  padding: 0em;
  margin: 0em;

  img{
    width: 100%;
    padding-bottom: -10em;
  }
`;
