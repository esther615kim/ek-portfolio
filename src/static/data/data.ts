import { IProject } from './../../../types';

export const projects: IProject[] =[
    {
        name:"Food Delivery App",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        image_url:require("../image/delivery.png"),
        deployed_url:"",
        github_url:"",
        category:["Front End","Mobile"],
        technologies:["React","TypeScript"]
    },
    {
        name:"React Crypto App",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        image_url:require("../image/crypto_app.png"),
        deployed_url:"",
        github_url:"",
        category:["Front End","Mobile"],
        technologies:["React Native"]
    },
    {
        name:"React Node.js Readit",
        description:"Lorem ipsum dolor sit amet consectetur",
        image_url:require("../image/readit.png"),
        deployed_url:"",
        github_url:"",
        category:["Front End","Back End","Mobile"],
        technologies:["React", "Node.js","MUI"]
    },
    {
        name:"React Testing",
        description:"Lorem ipsum dolor sit amet consectetur",
        image_url:require("../image/react-testing.png"),
        deployed_url:"",
        github_url:"",
        category:["Front End","Front End"],
        technologies:["React", "Jest","MUI"]
    },
    {
        name:"TypeScript Invitation",
        description:"Lorem ipsum dolor sit amet consectetur",
        image_url:require("../image/invitation.png"),
        deployed_url:"",
        github_url:"",
        category:["Front End"],
        technologies:["React", "Chart.js","MUI"]
    },
]

