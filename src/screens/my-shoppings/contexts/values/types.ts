// Types
import { UserShoppingsData } from "../../../../types/item";

export type ValuesContextPayload = {
  isLoadingGetMyShoppinngs: boolean;
  setIsLoadingGetMyShoppings: React.Dispatch<React.SetStateAction<boolean>>;
  userShoppings: UserShoppingsData[];
  setUserShoppings: React.Dispatch<React.SetStateAction<UserShoppingsData[]>>;
}