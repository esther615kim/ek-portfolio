import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container.styled';
import Arrow from './Arrow';
export default function Stack() {
  return (
    <div id="stack">
      <Container bg={'#003C57'}>
        <h3>I'm stack!!</h3>
        <Arrow />
      </Container>
    </div>
  );
}
