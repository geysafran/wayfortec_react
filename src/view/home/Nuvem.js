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
{
 

}

  .container-principal-home{
    background-image: url('./img/programming.jpg');
    width: 100%;
    display: flex;
    justify-content: space-around;
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