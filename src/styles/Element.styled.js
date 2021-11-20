import styled from 'styled-components';
// const GRADIENT_PURPLE = "linear-gradient(180deg, rgba(179,156,250,1) 11%, rgba(204,149,250,1) 54%)";

export const StyledButton = styled.button`
margin-right:0.2rem;
border:none;
background:${({ bg }) => bg || "transparent"};
font-weight:600;
text-shadow: -2px -2px 3px rgba(218,202,202,0.51);
font-size:${({ theme }) => theme.fontSize.subtitle
    }};
    &:hover{
        opacity:0.6;
        transform:scale(1.05);
    }
`
export const ColoredButton = styled.button`
margin-left:0.2rem;
border:none;
opacity:1;
border-radius: 5px;
padding:5px 10px;
background:${({ bg }) => bg || "transparent"};
text-shadow: -1px -1px 2px rgba(218,202,202,0.1);
font-weight:600;

background: linear-gradient(34deg, rgba(128,139,244,1) 0%, rgba(128,139,244,1) 19%, rgba(192,133,246,1) 78%, rgba(189,118,245,1) 96%);
font-size:${({ theme }) => theme.fontSize.subtitle
    };
box-shadow:9px 11px 23px -9px rgba(63,63,63,0.63);
/* button animation => repeat it when it is on the landing page? */
animation: blinking 1.5s 4 ease-in ;
  animation-delay: ${({ delay }) => delay || '8s'};

  @keyframes blinking {
      50%{
        opacity:0.4;
      }
      100%{
          opacity:1;
      }
    }
    &:hover{
        background:rgba(189,118,245,1);
        transform:scale(1.03);
    }
`

export const StyledImage = styled.img`
width:${({ width }) => width | 300};;
border-radius:${({ border }) => border};;
transition: transform 0.03s ease-in;
padding:0 5px 3px;
background-image: cover;
&:hover{
        transform:scale(0.98);
    }
`
