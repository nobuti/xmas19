import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "@nobuti/styled-reset";
import posed, { PoseGroup } from "react-pose";

import Icon from "./Icon";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
   font-family: system-ui,sans-serif;
  }
`;

const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & + & {
    margin-bottom: 32px;
  }

  @media (min-width: 800px) {
    & + & {
      margin-bottom: 0;
    }
  }
`;

const H1 = styled.h1`
  margin-bottom: 16px;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 500;

  & + & {
    margin-top: 16px;
  }
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
  flex-direction: column-reverse;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: black;
  color: white;
  font-family: inherit;
  font-size: 20px;
  padding: 8px 16px;
`;

const ICONS = [
  "arbol",
  "bola",
  "baston",
  "elfo",
  "estrella",
  "muneco",
  "regalo",
  "reno",
  "santa",
  "trineo"
];

const IconPosed = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Content = () => {
  const [icon, setIcon] = useState(0);
  useEffect(() => {
    new Audio("/audio.mp3").play();
  }, []);

  useEffect(() => {
    const updateIcon = () => {
      const index = icon + 1;
      index >= ICONS.length ? setIcon(0) : setIcon(index);
    };
    setTimeout(updateIcon, 5000);
  }, [icon]);

  return (
    <Container>
      <Column>
        <H1>Querido Liam,</H1>
        <P>
          Según me han informado mis espías duendes, te has portado bien. Aunque
          he visto por las cámaras que algunas veces te cuesta hacerle caso a
          mamá y a papá. Has sacado buenas notas, veo que te esfuerzas haciendo
          los deberes, pero con mamá te cuestan más y siempre lloras. Esto
          tienes que mejorarlo.
        </P>
        <P>
          Te estás convirtiendo en un muchacho muy guapo e inteligente. Tienes
          muchos amigos, y una familia que te quiere mucho. Tus padres te adoran
          y eres la parte más importante de su vida. Y hablando de familia,
          pronto tendrás una hermana o hermano, y serás un ejemplo para ella o
          él. Así que cuento contigo para que la ayudes cada día.
        </P>
        <P>
          Me dicen mis duendes que algo que te molesta es no tener fotos de
          bebé, por eso le he pedido un retrato tuyo al hada de los dientes y he
          mandado a los duendes pintarlo en grande. Espero que te guste.
        </P>
        <P>Ahora sigue la luz y descubre el resto de cosas que te he traído!</P>
      </Column>
      <Column>
        <PoseGroup>
          <IconPosed
            style={{ justifyContent: "center", display: "flex" }}
            key={ICONS[icon]}
          >
            <Icon name={ICONS[icon]} />
          </IconPosed>
        </PoseGroup>
      </Column>
    </Container>
  );
};

const Intersticial = ({ clickHandler }) => {
  return (
    <Container>
      <Button onClick={clickHandler}>
        Liam, antes de abrir los regalos pulsa aquí
      </Button>
    </Container>
  );
};
const App = () => {
  const [allow, setAllow] = useState(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        {allow ? (
          <Content />
        ) : (
          <Intersticial clickHandler={() => setAllow(true)} />
        )}
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
