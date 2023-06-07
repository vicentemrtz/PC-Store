// Modules
import { createContext, useState } from "react"

// Types
import { ValuesContextPayload } from "./types";
import { UserShoppingsData } from "../../../../types/item";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const [ isLoadingGetMyShoppinngs, setIsLoadingGetMyShoppings ] = useState(true);
  const [ userShoppings, setUserShoppings ] = useState<UserShoppingsData[]>([]);

  const payload:ValuesContextPayload = {
    isLoadingGetMyShoppinngs, setIsLoadingGetMyShoppings,
    userShoppings, setUserShoppings
  }
  
  return (
    <ValuesContext.Provider value={payload}>
      {children}
    </ValuesContext.Provider>
  )
}
