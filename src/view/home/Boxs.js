import React from "react";
import styled from "styled-components";


export default function Boxs(){
    return(
        <Section>
          <div className="container-principal-about">
              <div className="box-mvv">
                <h2 className="title-about">Quem Somos</h2>

                <div className="boxyner mission">
                  <h3 className="titlye mission">Missão</h3>
                  <p className="text mission">
                  Alcançar e prover conhecimento de tecnologia à todos de forma acessível.
                  </p>
                </div>
                <div className="boxyner vision">
                  <h3 className="titlye vision">Visão</h3>
                  <p className="text vision">
                  Ser reconhecido por ter o melhor acesso, de forma transformadora, à cursos de tecnologia.
                  </p>
                </div>
                <div className="boxyner value">
                  <h3 className="titlye value">Valores</h3>
                  <p className="text value">
                    Praticidade, ser divertido, ser dinâmico, abrir os olhos através do conhecimento.
                  </p>
                </div>
              </div>
                
                <div className="box-we">
                  <div className="boxer-persona">
                      <img src="" className="photowe-pedro" />
                      <h3 className="">Pedro Augusto</h3>
                    </div>
                    <div className="boxer-persona">
                      <img src="" className="photowe-pedro" />
                      <h3 className="">Geysa França</h3>

                    </div>
                    <div className="boxer-persona">
                      <img src="" className="photowe-pedro" />
                      <h3 className="">Leandro Silva</h3>

                    </div>
                    <div className="boxer-persona">
                      <img src="" className="photowe-rapha" />
                      <h3 className="">Jean Silva</h3>

                    </div>
                    <div className="boxer-persona">
                      <img src="" className="photowe-rapha" />
                      <h3 className="">Raphael Silva</h3>

                    </div>
                    <div className="boxer-persona">
                      <img src="" className="photowe-marilia" />
                      <h3 className="">Marília Silva</h3>

                    </div>
                  
                </div> 
          </div>


            
        </Section>
);
}

const Section = styled.section`
width: 100%;

.container-principal-about{

}

.box-mvv{
  width: 100%;


}

.title-about{
  color: blue;
  text-align: center;


}

.boxyner{
  align-items: center;
  display: flex;
  padding: 2vw;
  flex-direction: column;
  

}

.titlye {
  text-align: center;
  font-size: 1.2rem;

}

.text{
  font-size: 1rem;
  text-align: center;
  width: 20vw;

}

.box-we{
  display: grid;
    grid-template-columns: 200px 200px;
    justify-content: center;
}


  
`;
