import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 2rem;
  top: 0;
  right: 0;
  left: 0;
  padding: ${({ theme }) => theme.spacing.padding};
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: ${({ bg }) => bg || "#f7f5f6"};

  div {
    /* display:flex; */
    align-items: center;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.body};
      &:hover {
        
      }
    }
  }
`;
