// Types
import { GetItemData } from "../../../../types/item";
import { OptionData } from "../../../../components/form/simple-select/types";

export type ValuesContextPayload = {
  items: GetItemData[];
  setItems: React.Dispatch<React.SetStateAction<GetItemData[]>>;
  itemsToShow: GetItemData[];
  setItemsToShow: React.Dispatch<React.SetStateAction<GetItemData[]>>;
  brands: OptionData[];
  setBrands: React.Dispatch<React.SetStateAction<OptionData[]>>;
  categories: OptionData[];
  setCategories: React.Dispatch<React.SetStateAction<OptionData[]>>;
  isLoadingGetItems: boolean;
  setIsLoadingGetItems: React.Dispatch<React.SetStateAction<boolean>>;
}