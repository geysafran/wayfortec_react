import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Globalstyle from "./Style0";

import Top from "./Top";
import Router from "./Router";
import Footer from './Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Corpo>
        <Top />
        <Router />
        <Footer />
      </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body`
  margin: 0em;
  height: auto;
`;
