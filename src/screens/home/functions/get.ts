// Modules
import { useContext } from 'react';

// Contexts
import { ValuesContext } from '../contexts/values';

// Hooks
import useValues from './values';

// Types
import { GetItemData } from '../../../types/item';

export default function useGet () {
  
  const { getItems } = useValues();
  const { setItems, setItemsToShow, setCategories, setBrands, setIsLoadingGetItems } = useContext(ValuesContext);
  
  async function startGetItems () {
    try {
      const response = await Promise.all(getItems());
      const mappedItems = response.map(item => parseItems(item));
      setItems(mappedItems);
      setItemsToShow(mappedItems);
      getBrands(mappedItems);
      getCategories(mappedItems);
      setIsLoadingGetItems(false);
    } catch (err:any) {
      console.log(err);
      setIsLoadingGetItems(false);
    }
  }

  function parseItems (item:string[]):GetItemData {
    const [ id, model, brand, category, price ] = item;
    return { id, model, brand, category, price };
  }

  function getBrands (data:GetItemData[]) {
    const brands = data.map((item) => item.brand);
    const notRepeatedBrands = [...new Set(brands)];
    const mappedBrands = notRepeatedBrands.map((item, key) => ({ id:(key + 1), label:item }));
    setBrands(mappedBrands);
  }

  function getCategories (data:GetItemData[]) {
    const categories = data.map((item) => item.category);
    const notRepeatedCategories = [...new Set(categories)];
    const mappedCategories = notRepeatedCategories.map((item, key) => ({ id:(key + 1), label:item }));
    setCategories(mappedCategories);
  }

  return {
    startGetItems
  }

}
