// Modules
import { useContext } from 'react'

// Contexts
import { FormContext } from '../contexts/form'

export default function useValidate () {

  const { loginForm } = useContext(FormContext);
  
  function validateLoginValues (isLoading:boolean) {
    const { username, password } = loginForm.form;
    return username && password && !isLoading;
  }

  return {
    validateLoginValues
  }

}
