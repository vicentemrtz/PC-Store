// Modules
import { useContext } from 'react';

// Contexts
import { FormContext } from '../contexts/form';

export default function useValues () {

  const { buyForm } = useContext(FormContext);
  
  function getPostBuyValues () {
    return buyForm.form;
  }

  return {
    getPostBuyValues
  }

}
