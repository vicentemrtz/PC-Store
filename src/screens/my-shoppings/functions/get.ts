// Modules
import { useContext } from "react";

// Contexts
import { ValuesContext } from "../contexts/values";
import { ContractContext } from "../../../contexts/contract-context";

// Types
import { UserShoppingsData } from "../../../types/item";

export default function useGet () {

  const { setUserShoppings, setIsLoadingGetMyShoppings } = useContext(ValuesContext);
  const { contractInstance, account } = useContext(ContractContext);
  
  async function getItemsIds () {
    const response = await contractInstance.methods.getUserShoppings(account).call();
    return (response as string).split(',').filter((id: string) => id !== '');
  }

  async function startGetMyShoppings () {
    try {
      const ids = await getItemsIds();
      const itemPromises = ids.map((id: string) => contractInstance.methods.getTicketById(id).call());
      const itemsData = await Promise.all(itemPromises);
      const mappedItems = itemsData.map((item) => handleItemData(item));
      setUserShoppings(mappedItems);
      setIsLoadingGetMyShoppings(false);
    } catch (err:any) {
      setIsLoadingGetMyShoppings(false);
    }
  }

  function handleItemData (item:any):UserShoppingsData {
    const [ idTicket, idUser, amount, idItem, model, brand, category, price ] = item;
    return { amount, brand, category, id: idTicket, idItem, idUser, model, price }
  }

  return {
    startGetMyShoppings
  }

}
