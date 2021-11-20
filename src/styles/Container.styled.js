import styled from 'styled-components';

export const Container = styled.div`
box-sizing:border-box;
margin:0;
width:100vw;
align-items:center;
justify-content: center;
height: ${({ height }) => height || "100vh"};
background-color: ${({ bg }) => bg || "#f7f5f6"};
/* scroll-snap-align: start; */
`

export const Wrapper = styled.div`
width:100%;
height:${({ height }) => height || "100%"};
display:flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
background-color: ${({ bg }) => bg || "#f7f5f6"};
`

// "#f7f5f6"