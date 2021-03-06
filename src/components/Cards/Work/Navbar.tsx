import React from 'react';
import { FunctionComponent } from 'react';
import { Category } from '../../../../types';


export const NavListItem: FunctionComponent<{value:Category|"All",handleSetCategory:Function}> =({
    value, handleSetCategory
})=>{
    return <li 
    className="px-2 py-1 text-xs dark:font-semibold font-rubik bg-zinc-600 opacity-80 hover:text-zinc-800 dark:text-red-400 rounded-lg cursor-pointer hover:bg-rose-300 md:text-lg"
    onClick={()=>handleSetCategory(value)}
    >{value}</li>
}

const Navbar:FunctionComponent<{handleSetCategory:Function}> = (props) => {
  return (
    <div className="flex content-center justify-center py-2 pt-5 space-x-2 overflow-x-auto text-lg list-none text-stone-200 text-medium">
        <NavListItem value="All" {...props}/>
        <NavListItem value="Front End" {...props}/>
        <NavListItem value="Back End" {...props}/>
        <NavListItem value="Mobile" {...props}/>
    </div>
  )
}

export default Navbar