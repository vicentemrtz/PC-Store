// Modules
import { v4 as uuid } from 'uuid';
import { useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';

// Contexts
import { FormContext } from '../contexts/form';
import { ValuesContext } from '../contexts/values';
import { ContractContext } from "../../../contexts/contract-context";
import { DialogsContext } from '../../../contexts/dialogs-context';

export default function useSubmit () {

  const navigate = useNavigate();
  const { id } = useParams();
  const { item } = useContext(ValuesContext);
  const { buyForm } = useContext(FormContext);
  const { setMessageDialog } = useContext(DialogsContext);
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
    navigate('/');
    setMessageDialog({ title:'Elemento Comprado', body:'Gracias por su compra', type:'success' });
  }

  // On Error
  function onErrorSubmitBuyItem () {
    setMessageDialog({ title:'Elemento no Comprado', body:'Compra rechazada', type:'error' });
  }

  return {
    startSubmitBuyItem
  }

}
