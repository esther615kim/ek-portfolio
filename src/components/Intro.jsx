import React, { useEffect, useRef } from 'react';
import Arrow from './Arrow';
import { StyledDiv } from '../styles/Intro.styled';
import { Wrapper } from '../styles/Container.styled';
import { Email, LinkedIn, GitHub, Code } from '@mui/icons-material';
import { TextAnimation } from './TextAnimation';
import { StyledImage } from '../styles/Element.styled';
import { Grid, IconButton, Collapse, styled } from '@mui/material';
import { init } from 'ityped';
import BgLine from './static/BgLine';
import profile from '../static/image/profile.png';
import About from './About';

const ExpandContent = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Intro() {
  const textRef = useRef();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   text-effect
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      startDelay: 1000,
      typeSpeed: 200,
      backDelay: 800,
      strings: ['Web', 'React', 'Frontend'],
      loop: false,
    });
  }, []);

  return (
    <div id="intro">
      <Wrapper height={'90vh'}>
        <StyledDiv>
          <div className="profile-card">
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              spacing={1}
              container
            >
              <Grid item md={8}>
                <h1>
                  <TextAnimation string={'Esther'} />
                  &nbsp;Kim
                </h1>

                <div className="title-box">
                  <h2>
                    <span ref={textRef}></span>
                  </h2>
                  <h2>&nbsp;Developer</h2>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="profile-box">
                  <StyledImage
                    border={'48%'}
                    width={220}
                    src={profile}
                    alt="profile"
                  />
                </div>
              </Grid>
            </Grid>
            <div>
              <IconButton>
                <Email fontSize="large" />
              </IconButton>
              <IconButton>
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton>
                <Code fontSize="large" />
              </IconButton>
              <IconButton>
                <LinkedIn fontSize="large" />
              </IconButton>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: 10,
              }}
            >
              <ExpandContent
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <Arrow />
              </ExpandContent>
              <h3>about me</h3>
            </div>

            {/* expanding content */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <About />
            </Collapse>
          </div>
        </StyledDiv>
        <div style={{ position: 'absolute', right: 0 }}>
          <BgLine />
        </div>
      </Wrapper>
    </div>
  );
}
