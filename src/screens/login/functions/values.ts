// Modules
import { useContext } from 'react';

// Contexts
import { FormContext } from '../contexts/form';

export default function useValues () {

  const { loginForm: buyForm } = useContext(FormContext);
  
  function getLoginValues () {
    return buyForm.form;
  }

  return {
    getLoginValues
  }

}
