// Modules
import { createContext } from "react"

// Types
import { ValuesContextPayload } from "./types";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const payload:ValuesContextPayload = {

  }
  
  return (
    <ValuesContext.Provider value={payload}>
      {children}
    </ValuesContext.Provider>
  )
}
