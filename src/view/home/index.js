import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import Carousel1 from './Carousel';
import Nuvem from './Nuvem';
import Boxs from './Boxs';

export default function Home(){
    return(
        <section>
            <Carousel1/>
            <Nuvem/>
            <Boxs/>
        </section>
    );
}