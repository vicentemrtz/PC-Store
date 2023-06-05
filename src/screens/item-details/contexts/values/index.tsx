// Modules
import { createContext, useState } from "react"

// Types
import { ValuesContextPayload } from "./types";
import { GetItemData } from "../../../../types/item";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const [ item, setItem ] = useState<GetItemData | null>(null);

  const payload:ValuesContextPayload = {
    item, setItem
  }
  
  return (
    <ValuesContext.Provider value={payload}>
      {children}
    </ValuesContext.Provider>
  )
}
