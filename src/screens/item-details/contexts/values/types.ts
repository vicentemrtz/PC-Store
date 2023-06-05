// Types
import { GetItemData } from "../../../../types/item";

export type ValuesContextPayload = {
  item: GetItemData | null;
  setItem: React.Dispatch<React.SetStateAction<GetItemData | null>>
}