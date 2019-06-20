import React from "react";

import { Container, DestaqueImageWrapper, DestaqueTextWrapper } from "./styles";

const Destaque = () => (
  <Container>
    <DestaqueImageWrapper>
      <h1>O que é OKR</h1>
      <p>
        <a href="/post/blog/o-que-e-okr">
          Conheça o novo modelo de gestão criado pelo Google que ajuda à
          alavancar os resultados da sua empresa e tornar sua equipe mais eficaz
        </a>
      </p>
    </DestaqueImageWrapper>
    <DestaqueTextWrapper />
  </Container>
);

export default Destaque;
