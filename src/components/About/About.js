import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Sobre mim</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Olá! Meu nome é <strong>Kayke Migon</strong>. Sou um estudante de desenvolvimento de jogos originário do Brasil. Durante minha jornada, busco aprimorar minha ética de trabalho, habilidades de comunicação e adaptabilidade.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Minha paixão por jogos me inspirou a seguir uma carreira como desenvolvedor de jogos. Minha jornada no mundo da tecnologia começou com um forte entusiasmo por resolver desafios. Apesar dos obstáculos, mantive minha determinação e estabeleci amizades duradouras que me apoiaram ao longo desse percurso. Agora, estou focado em me tornar um desenvolvedor de jogos de sucesso.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Começar minha jornada no mundo do desenvolvimento de jogos tem sido uma experiência incrível e emocionante. Estou ansioso para continuar explorando esse universo empolgante, buscando constantemente aprimorar minhas habilidades e criar jogos envolventes.
              <div className="tagline2">
                Tecnologias:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
