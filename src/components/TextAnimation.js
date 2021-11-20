import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export function TextAnimation({ string }) {
    const splitString = string.split("");

    console.log(splitString);
    return (
        <Wrapper>
            {splitString.map((item) => {
                return <span key={item}>{item}</span>
            })}
        </Wrapper>
    )
}

const textmoving = keyframes`
0% { opacity:0;transform:translateY(-10px); }
25% { opacity:0.6;transform:skewY(10deg); }
75% { opacity:1;transform:skewY(5deg); } 
100% { opacity:0;transform:translateY(-10px) ;}
`

const Wrapper = styled.span`
    display:inline-block;
    span {
        display:inline-block;
        opacity:1;
        /* color:#61dbfb; */
        font-weight:bold;
        animation-delay: 1s;
        animation-name:${textmoving};
        animation-duration:4s;
        animation-iteration-count:1;
    }
span:nth-child(1){
    animation-delay:1.1s;
}
span:nth-child(3){
    animation-delay:1.3s;
}
span:nth-child(5){
    animation-delay:1.5s;
}
`

//#61dbfb