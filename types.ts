export interface IProject{
    name:string,
    description:string,
    image_url:string,
    deployed_url:string,
    github_url:string,
    category:Category[],
    technologies:string[]
}

export type Category="Front End"|"Back End"|"Mobile"

export type MenuOptions ="about"|"work"|"contact"