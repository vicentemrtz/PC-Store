// Modules
import { createContext } from 'react';

// Types
import { FormContextPayload } from './types';

export const FormContext = createContext({} as FormContextPayload);

export default function FormContextContainer ({ children }:any) {

  const payload:FormContextPayload = {}

  return (
    <FormContext.Provider value={payload}>
      {children}
    </FormContext.Provider>
  )
}