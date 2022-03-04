import { IProject } from './../../../types';

export const projects: IProject[] =[
    {
        name:"Portfolio",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        image_url:require("../image/portfolio.png"),
        deployed_url:"https://affectionate-gates-1814fd.netlify.app/",
        github_url:"https://github.com/esther615kim/portfolio-project",
        category:["Front End","Mobile"],
        technologies:["React","TypeScript","tailwindcss"]
    },
    {
        name:"Food Delivery App",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        image_url:require("../image/delivery.png"),
        deployed_url:"https://deploy-preview-54--jovial-elion-cb6b73.netlify.app/",
        github_url:"https://github.com/react-node-project/butler-client",
        category:["Front End","Mobile"],
        technologies:["React","TypeScript","Team Project"]
    },
    {
        name:"React Crypto App",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        image_url:require("../image/crypto_app.png"),
        deployed_url:"https://pedantic-morse-dc91d4.netlify.app",
        github_url:"https://github.com/esther615kim/react-chartJS-my-crypto",
        category:["Front End","Mobile"],
        technologies:["React","Chart.js","styled-components"]
    },
    {
        name:"React Node.js Readit",
        description:"Lorem ipsum dolor sit amet consectetur",
        image_url:require("../image/readit.png"),
        deployed_url:"",
        github_url:"https://github.com/esther615kim/react-my-readit",
        category:["Front End","Back End","Mobile"],
        technologies:["React", "Node.js","MUI"]
    },
    {
        name:"React Testing",
        description:"Lorem ipsum dolor sit amet consectetur",
        image_url:require("../image/react-testing.png"),
        deployed_url:"",
        github_url:"https://github.com/esther615kim/react-testing-ek/blob/main/README.md",
        category:["Front End","Front End"],
        technologies:["React", "Jest","MUI"]
    },
    {
        name:"TypeScript Invitation",
        description:"Lorem ipsum dolor sit amet consectetur",
        image_url:require("../image/invitation.png"),
        deployed_url:"",
        github_url:"https://github.com/esther615kim/typescript-react-invitation",
        category:["Front End"],
        technologies:["React", "TypeScript","MUI"]
    },
]

