import styled from 'styled-components';


export const StyledDiv = styled.div`
height:100%;
position:relative;
display:flex;
position:relative;
flex-direction: column;
justify-content: center;
align-items: center;
padding:2rem;
color:${({ theme }) => theme.colors.body};
flex:3;
h1 {
    font-size:${({ theme }) => theme.fontSize.name};
    margin-bottom:0;
    text-shadow: -2px -2px 3px rgba(218,202,202,2);
}

h2 {
    font-size:${({ theme }) => theme.fontSize.jobTitle};
    color:${({ theme }) => theme.colors.title};
    text-shadow: -2px -2px 3px rgba(218,202,202,0.21);
    span {
        float:right;
        width:120px;
        display: inline-block;
        color:${({ theme }) => theme.colors.react};
    }
}

.title-box {
    display:flex;
    flex-direction:reverse;
    text-align:right;
}
.profile-card {
    border-radius:5px;
    max-width:700px;
    width:70%;
    min-height:400px;
    background:${({ theme }) => theme.colors.hero};
    padding:${({ theme }) => theme.spacing.padding};
    margin:2rem;
    box-shadow: 0 5px 5px rgba(0,0,0,0.05), 0 5px 5px rgba(0,0,0,0.05);
    z-index:1;
}
.profile-box {
    border-radius:48%;
    width:230px;
    margin-right:1rem;
    box-shadow:0 4px 0 0 lavender;
    /* background:#eee; */
}
`


