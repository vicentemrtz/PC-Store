// Modules
import { createContext } from 'react';

// Hooks
import useHandleForm from '../../../../hooks/use-handle-form';

// Types
import { FormContextPayload } from './types';

export const FormContext = createContext({} as FormContextPayload);

export default function FormContextContainer ({ children }:any) {

  const filterForm = useHandleForm(initialState);

  const payload:FormContextPayload = {
    filterForm
  }

  return (
    <FormContext.Provider value={payload}>
      {children}
    </FormContext.Provider>
  )
}

const initialState = {
  brand_filter:0,
  category_filter:0,
  model_filter:'',
}