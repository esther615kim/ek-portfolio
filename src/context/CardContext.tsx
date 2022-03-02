
import React, { useState,ReactNode,createContext } from "react";


export type MenuOptions ="about"|"work"|"contact"

type CardContextProviderProps ={
    children:ReactNode,
}

const CardContext = createContext<MenuOptions|CardContextProviderProps>({}as CardContextProviderProps);
// const CardContext = createContext({}as CardContextProviderProps);

export const CardContextProvider =({children}:CardContextProviderProps)=>{

    const [card, setCard] = useState<MenuOptions>("about");

    const setCardItem = (cardItem:MenuOptions):void =>{
      setCard(cardItem);
      console.log("card added in context=>",card)
    }

    const providerValue= {
       card,setCardItem
    }

    return(
        <CardContext.Provider value={providerValue}>
        {children}
        </CardContext.Provider>
    )
}

export default CardContext;
