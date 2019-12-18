import React from "react";
import styled from "styled-components";


export default function Boxs(){
    return(
        <Section>

            <section class="intro">
              <div className="">
                  <h2 className=""></h2>
                  <div className=""></div>
                  <div className=""></div>
              </div>
            </section>
  
            <section class="cursos">
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
            
                
            </section>
            <section class="eve">
                <h1>WayToTheWorld</h1>
                <p>Para você que deseja mostrar tudo que aprendeu com os cursos que você escolheu, inscreva-se para no WayToTheWorld e mostre sua capacidade em um evento de tecnologia exclusivo para nossos alunos.</p>
             </section>
        </Section>
);
}

const Section = styled.section`
    padding-top: 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel{
    color: blue;
  }
  .eve{
    width: 80vw;
    margin-top: 2em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;    
    border: 3px solid #4F76E8;
    background: #c4c4c4;
    text-align: center;
    border-radius: 30px;
  }
  .exc{
    width: 80vw;
    padding-top: 1em; 
    padding-bottom: 1em;
    border: 3px solid #c4c4c4;
    background: #4F76E8;
    text-align: center;
    border-radius: 30px;
  }
  .intro ul{
    list-style: none;
  }
  .cursos{
    width: 80vw;
    padding-top: 1em; 
    padding-bottom: 1em;
    border: 3px solid #4f76e8;
    background: #c4c4c4;
    border-radius: 30px;
    text-align: center;
  }
  .intro{
    width: 80vw;
    padding-top: 1em; 
    padding-bottom: 1em;
    border: 3px solid #c4c4c4;
    background: #4F76E8;
    text-align: center;
    border-radius: 30px;
  }
`;
