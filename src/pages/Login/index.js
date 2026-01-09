import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        <h1>
          Login
          <small>Oi</small>
        </h1>
      </Title>
      <p>Lorem ipsun dolor sit amet.</p>
      <button type='button'>enviar</button>
    </Container>
  );
}
