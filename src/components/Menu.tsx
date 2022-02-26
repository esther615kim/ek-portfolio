import React, { useState,useContext } from 'react';
import CardContext from '../context/CardContext';

const Menu = () => {

  const {setCardItem}:{setCardItem:any} = useContext(CardContext);
  const handleClickCard = (e)=>{
    e.preventDefault();
    setCardItem(prev => e.target.value);
  }
  return (
    <div>
      <button
      value="about"
      onClick={handleClickCard} 
      className="hover:text-red-400 mx-2 font-medium">ABOUT
      </button>
      <span>/</span>
      <button
      value="work"
      onClick={handleClickCard} 
      className="hover:text-red-400 mx-2 font-medium">WORK
      </button>
      <span>/</span>
      <button
      value="contact"
      onClick={handleClickCard} 
      className="hover:text-red-400 mx-2 font-medium">CONTACT
      </button>


      </div>
  )
}

export default Menu;