import React from "react";
import styled from "styled-components";


export default function Nuvem(){
    return(
        <Section>
          
          <div className="container-principal-home">
            <div className="boxyn studant">
                <h2 className="title-studant">Área do Aluno</h2>

              </div>
              <div className="boxyn subscription">
                <h2 className="title-subscription">Quero me inscrever!</h2>
                
              </div>
          </div>
        </Section>
);  
}

const Section = styled.section`
height: 60vh;

.container-principal-home{
  background: url('./src/img/programming.jpg');
  background-size: cover;
  width: 100%;
  align-items: center;
  margin: 0em;
  padding: 0em;
  display: flex;
  justify-content: center;
}

 
  img{
    width: 11vw;
  }
 
  .boxyn:hover{
    background: white;
    color: black;
    transition: 1s;
  }

  .boxyn {
    padding: 2vw;
    text-align: center;
    background: linear-gradient(to bottom, #003df1, #1b70cca6);
    box-shadow: 1px 3px 2px 1px #1f68b7;
    color: white;
    margin: 2vw;
    border-radius: 10vw;
  }

`;