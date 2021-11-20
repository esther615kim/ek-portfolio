import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function Arrow({ color }) {
  return (
    <div>
      <StyledDiv bg={color}>
        <a href="#stack">
          <KeyboardArrowDown style={{ fontSize: '3rem' }} />
        </a>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  /* bottom: 10%; */
  animation: arrowUpDown 2s infinite;
  animation-delay: ${({ delay }) => delay || '3s'};

  @keyframes arrowUpDown {
    100% {
      opacity: 0;
    }
  }
  a {
    color: ${({ bg }) => bg || '#b24ef5'};
  }
`;
