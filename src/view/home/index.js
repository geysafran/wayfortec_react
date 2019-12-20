import React from 'react';
import styled from 'styled-components';


import Nuvem from './Nuvem';
import Boxs from './Boxs';

export default function Home(){
    return(
        <section>
            <Nuvem/>
            <Boxs/>
        </section>
    );
}