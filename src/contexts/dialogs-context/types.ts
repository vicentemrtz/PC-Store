import { AlertColor } from "@mui/material";

export type DialogsContextPayload = {
  messageDialog: MessageDialogPayload | null;
  setMessageDialog: React.Dispatch<React.SetStateAction<MessageDialogPayload | null>>;
  closeMessageDialog: () => void
  isNoEthereumDialogShowing: boolean;
  setIsNoEthereumDialogShowing: React.Dispatch<React.SetStateAction<boolean>>;
  whichDialogIsOpen: DialogOptions;
  closeAnyDialog (): void;
}

export type DialogOptions = null; 


export type MessageDialogPayload = {
  title:string;
  body:string;
  type:AlertColor;
}