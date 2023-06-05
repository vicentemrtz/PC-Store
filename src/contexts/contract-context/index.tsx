// Modules
import { createContext, useState } from "react";

// Types
import { ContractContextPayload } from "./types";

export const ContractContext = createContext({} as ContractContextPayload);

export default function ContractContextContainer ({ children }:any) {

  const [ contractInstance, setContractInstance ] = useState<any>(null);
  const [ account, setAccount ] = useState<null | string>('HELLOWORLD');

  const payload = {
    account,
    setAccount,
    contractInstance,
    setContractInstance
  }

  return (
    <ContractContext.Provider value={payload}>
      {children}
    </ContractContext.Provider>
  )
}
