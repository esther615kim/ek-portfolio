import React, { useState } from "react";
import {createContext} from 'react';

type cardProviderResult = ReturnType<typeof CardProvider>;

const CardContext = createContext<cardProviderResult>({
    
});

export const CardProvider =({children})=>{

    const [card, setCard] = useState<string>("about");

    const setCardItem = (cardItem:string):void =>{
      setCard(cardItem);
    }

    return(
        <CardContext.Provider 
        value={{setCardItem,card,setCard}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext;
