import React, { useState } from 'react'

const Menu = () => {
  const [card,setCard] = useState("about");
  const handleClickCard = (e)=>{
    e.preventDefault();
    setCard(prev => e.target.value);
    console.log(card);
  }
  return (
    <div>
      <button
      value="about"
      onClick={handleClickCard} 
      className="hover:text-cyan-300 mx-2 font-medium">ABOUT
      </button>
      <span>/</span>
      <button
      value="work"
      onClick={handleClickCard} 
      className="hover:text-cyan-300 mx-2 font-medium">WORK
      </button>
      <span>/</span>
      <button
      value="contact"
      onClick={handleClickCard} 
      className="hover:text-cyan-300 mx-2 font-medium">CONTACT
      </button>


      </div>
  )
}

export default Menu;