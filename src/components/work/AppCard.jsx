import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/Container.styled';

function AppCard({ title }) {
  return (
    <Card>
      <img src="#" alt="" />
      <h5>{title}</h5>
    </Card>
  );
}

export default AppCard;

const Card = styled(Wrapper)`
  max-width: 18rem;
  height: 14rem;
  background: #3acade;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  z-index: 2;
  transition: all 0.2s ease-in;
  &:hover {
    color: #fff;
  }
`;
