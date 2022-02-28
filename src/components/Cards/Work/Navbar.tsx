import React from 'react';
import { FunctionComponent } from 'react';
import { Category } from '../../../../types';


export const NavListItems: FunctionComponent<{value:Category|"All"}> =({
    value,
})=>{
    return <li className="cursor-pointer hover:text-red-400">{value}</li>
}

const Navbar = () => {
  return (
    <div className="flex space-x-5 pt-5 py-2 list-none overflow-x-auto text-stone-200 text-lg text-medium">
        <NavListItems value="All"/>
        <NavListItems value="Front End"/>
        <NavListItems value="Back End"/>
        <NavListItems value="Mobile"/>
    </div>
  )
}

export default Navbar