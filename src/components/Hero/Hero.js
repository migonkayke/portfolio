import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Oi, Eu sou Kayke.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Um desenvolvedor de games.',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    'Um solucionador de problemas.',
                    1000,
                    'Um pensador inovador.',
                    1000,
                    'Um....',
                    1000,
                    'Um.... cara legal?',
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  Estou ficando sem ideias...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... você pode rolar para baixo para ver meus projetos agora...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Sério, meus projetos são muito legais, vai dar uma olhada!",
                    1000,
                    "Você está... aqui ainda?",
                    1000,
                    "Ok, foi divertido, mas vou reiniciar o loop agora...",
                    1000,
                    "Até mais! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && <ScrollAnimation animateIn="flipInX" offset={0}>
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              Rolar para baixo
              <img
                src="/scroll-down.svg"
                alt="scroll-down"
              />
            </ScrollLink>
          </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
