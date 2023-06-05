// Modules
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

// Contexts
import { FormContext } from '../contexts/form';
import { ValuesContext } from '../contexts/values';
import { ContractContext } from '../../../contexts/contract-context';

export default function useGet () {

  const { id } = useParams();
  const { buyForm } = useContext(FormContext);
  const { setItem } = useContext(ValuesContext);
  const { contractInstance } = useContext(ContractContext);

  const { setForm } = buyForm;

  async function startGetItemDetails () {
    const selectedItems = await contractInstance.methods.getItemById(id).call();
    const [ idItem, model, brand, category, price ] = selectedItems;
    setItem({ id: idItem, model, brand, category, price });
    setPrice(price);
  }

  function setPrice (price:string) {
    setForm({ price, amount:1, total:'' })
  }

  return {
    startGetItemDetails
  }
  
}
