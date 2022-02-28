import React from 'react';
import { FunctionComponent } from 'react';
import { Category } from '../../../../types';


export const NavListItems: FunctionComponent<{value:Category|"All",handleSetCategory:Function}> =({
    value, handleSetCategory
})=>{
    return <li 
    className="cursor-pointer hover:text-red-400"
    onClick={()=>handleSetCategory(value)}
    >{value}</li>
}

const Navbar:FunctionComponent<{handleSetCategory:Function}> = (props) => {
  return (
    <div className="flex space-x-5 pt-5 py-2 list-none overflow-x-auto text-stone-200 text-lg text-medium">
        <NavListItems value="All" {...props}/>
        <NavListItems value="Front End" {...props}/>
        <NavListItems value="Back End" {...props}/>
        <NavListItems value="Mobile" {...props}/>
    </div>
  )
}

export default Navbar