import React from "react";
import styled from "styled-components";

import back from '../img/Rectangle.png';


export default function Nuvem(){
    return(
        <Section>
          
          <div className="container-principal-home">
            <div className="box-studant">
                <h2 className="title-studant">Área do Aluno</h2>

              </div>
              <div className="box-subscription">
                <h2 className="title-subscription">Quero me inscrever!</h2>
                
              </div>
          </div>
          <figure>
            <img src={back} width="auto" alt='back' />
          </figure>
        </Section>
);  
}

const Section = styled.section`
  margin: 0em;
  padding: 0em;
  display: grid;
  grid-template-columns: 5.5em 5.5em 5.5em;
  grid-template-rows: 12em 12em 12em;
  justify-content: space-around;
  hr{
    border-color: #4F76E8;
    width: 70vw;
    border-width: 0.1em;
    margin: 3vw;
}
  img{
    width: 11vw;
  }

  .box-studant{
    padding: 5vw;
    background: blue;
    box-shadow: 3px 1px 2px 3px green;
    color: white;
    border-radius: 10vw
  }

  .box-studant:hover{
    background: white;
    color: black;
    transition: 1s;
    padding: 6vw;
    
    
  }

  .box-subscription{
    padding: 5vw;
    background: blue;
    box-shadow: 3px 1px 2px 3px green;
    color: white;
    border-radius: 10vw
  }

  .box-subscription:hover{
    background: white;
    color: black;
    transition: 1s;
    padding: 6vw;
    
    
  }

  }`;