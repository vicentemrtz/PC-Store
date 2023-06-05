// Modules
import { createContext } from 'react';

// Hooks
import useHandleForm from '../../../../hooks/use-handle-form';

// Types
import { FormContextPayload } from './types';

export const FormContext = createContext({} as FormContextPayload);

export default function FormContextContainer ({ children }:any) {

  const buyForm = useHandleForm(initialState);

  const payload:FormContextPayload = {
    buyForm
  }

  return (
    <FormContext.Provider value={payload}>
      {children}
    </FormContext.Provider>
  )
}

const initialState = {
  amount:1,
  price:'',
  total:''
}