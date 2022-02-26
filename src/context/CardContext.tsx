import { create } from "domain";
import { stringify } from "querystring";
import React, { useState,ReactNode,createContext } from "react";

type CardContextProviderProps ={
    children:ReactNode,
}

const CardContext = createContext({}as CardContextProviderProps);

export const CardContextProvider =({children}:CardContextProviderProps)=>{

    const [card, setCard] = useState<string>("about");

    const setCardItem = (cardItem:string):void =>{
      setCard(cardItem);
      console.log("카드 넣음",card)
    }

    return(
        <CardContext.Provider value={{card,setCardItem}}>
        {children}
        </CardContext.Provider>
    )
}

export default CardContext;
