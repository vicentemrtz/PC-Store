// Modules
import { useContext } from "react";

// Contexts
import { FormContext } from "../contexts/form";
import { ValuesContext } from "../contexts/values";

// Types
import { GetItemData } from "../../../types/item";

export default function useFilters () {

  const { filterForm } = useContext(FormContext);
  const { items, setItemsToShow, brands, categories } = useContext(ValuesContext);
  const { brand_filter, category_filter, model_filter } = filterForm.form;

  function handleOnChangeBrand () {
    if (!brand_filter) return items;
    const selectedBrandText = brands[brand_filter - 1].label
    return items.filter(item => item.brand === selectedBrandText);
  }

  function handleOnChangeCategory (filteredItems:GetItemData[]) {
    if (!category_filter) return filteredItems;
    const selectedCategoryText = categories[category_filter - 1].label
    return filteredItems.filter(item => item.category === selectedCategoryText);
  }

  function handleOnChangeModel (filteredItems:GetItemData[]) {
    if (!model_filter) return filteredItems;
    return filteredItems.filter(item => item.model.toLowerCase().includes(model_filter.toLowerCase()));
  }

  function startFilter () {
    const itemsA = handleOnChangeBrand();
    const itemsB = handleOnChangeCategory(itemsA);
    const itemsC = handleOnChangeModel(itemsB);
    setItemsToShow(itemsC);
  }

  return {
    startFilter
  }

}
