import React, { useState, useEffect } from 'react';
import logo from '../../static/image/logo-pink.png';
import { StyledDiv } from './styled';
import {
  StyledButton,
  StyledImage,
  ColoredButton,
} from '../../styles/Element.styled';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    changeBackground();
  }, []);

  const changeBackground = () => {
    // console.log(window.scrollY);
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeBackground);
  return (
    <StyledDiv bg={navbar ? '#fff' : 'transparent'}>
      <div>
        <StyledImage width={50} src={logo} alt="logo" />
      </div>
      <div>
        <StyledButton>
          <a href="#intro">home</a>
        </StyledButton>
        <StyledButton>
          <a href="#stack">about</a>
        </StyledButton>
        <StyledButton>
          <a href="#work">work</a>
        </StyledButton>
        <ColoredButton>
          <a href="#contact" style={{ color: '#fff' }}>
            contact
          </a>
        </ColoredButton>
      </div>
    </StyledDiv>
  );
}
