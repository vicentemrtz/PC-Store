// Modules
import { createContext, useState } from "react"

// Types
import { ValuesContextPayload } from "./types";
import { GetItemData } from "../../../../types/item";
import { OptionData } from "../../../../components/form/simple-select/types";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const [ items, setItems ] = useState<GetItemData[]>([]);
  const [ itemsToShow, setItemsToShow ] = useState<GetItemData[]>([]);
  const [ brands, setBrands ] = useState<OptionData[]>([]);
  const [ categories, setCategories ] = useState<OptionData[]>([]);

  const payload:ValuesContextPayload = {
    items, setItems,
    itemsToShow, setItemsToShow,
    brands, setBrands,
    categories, setCategories
  }
  
  return (
    <ValuesContext.Provider value={payload}>
      {children}
    </ValuesContext.Provider>
  )
}
