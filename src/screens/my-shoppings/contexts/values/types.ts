// Types
import { UserShoppingsData } from "../../../../types/item";

export type ValuesContextPayload = {
  userShoppings: UserShoppingsData[];
  setUserShoppings: React.Dispatch<React.SetStateAction<UserShoppingsData[]>>;
}