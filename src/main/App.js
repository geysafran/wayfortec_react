import React from 'react';
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Globalstyle from './Style0'

import Top from './Top'


export default function App() {
  return (
      <BrowserRouter>
      <Globalstyle/>
        <Corpo>
          <Top/>
          </Corpo>
      </BrowserRouter>
  );
}

const Corpo = styled.body`
  margin: 0em;
`;