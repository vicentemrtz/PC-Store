// Modules
import { v4 as uuid } from 'uuid';
import { useContext } from "react";
import { useParams } from 'react-router-dom';

// Contexts
import { FormContext } from '../contexts/form';
import { ValuesContext } from '../contexts/values';
import { ContractContext } from "../../../contexts/contract-context";

export default function useSubmit () {

  const { id } = useParams();
  const { buyForm } = useContext(FormContext);
  const { item } = useContext(ValuesContext);
  const { contractInstance, account } = useContext(ContractContext);

  function generateId () {
    return uuid();
  }
  
  async function startSubmitBuyItem () {
    try {
      const idTicket = generateId();
      const { amount, price } = buyForm.form;
      const { brand, category, model } = item!!;
      await contractInstance.methods.createTicket(idTicket, account, String(amount), id, model, brand, category, price).send({ from: account });
      onSuccessSubmitBuyItem();
    } catch (err:any) {
      onErrorSubmitBuyItem();
    }
  }

  // On Success
  function onSuccessSubmitBuyItem () {
    console.log('Success');
  }

  // On Error
  function onErrorSubmitBuyItem () {
    console.log('Error')
  }

  return {
    startSubmitBuyItem
  }

}
