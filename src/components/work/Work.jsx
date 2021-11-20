import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from '../../styles/Container.styled';
import AppCard from './AppCard';

const APPS = ['Ecommerce App', 'NEWS API App', 'Job Search App'];

export default function Work() {
  return (
    <div id="work">
      <Container height={'100vh'}>
        <Wrapper>
          <h2>Recent work</h2>
          <StyledList>
            <li>Featured</li>
            <li>React</li>
            <li>Mobile</li>
          </StyledList>

          <AppList>
            {APPS.map((item) => {
              return <AppCard key={item} title={item} />;
            })}
          </AppList>
        </Wrapper>
      </Container>
    </div>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  margin: 1rem;

  li {
    font-size: ${({ theme }) => theme.fontSize.subtitle};
    margin-right: 1rem;
    padding: 1rem 2rem;
    background:${({ theme }) => theme.colors.icon};
    color: #fff;
    border-radius: 5px;
    &: hover {
            background:${({ theme }) => theme.colors.hover};
            transform: scale(1.05);
  }
`;

const AppList = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
