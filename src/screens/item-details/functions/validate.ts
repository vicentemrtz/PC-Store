// Modules
import { useContext } from "react"

// Contexts
import { FormContext } from "../contexts/form";

export default function useValidate () {

  const { buyForm } = useContext(FormContext);
  
  function validateBuyForm () {
    const { amount, price } = buyForm.form;
    return (amount && price);
  }

  return {
    validateBuyForm
  }

}
