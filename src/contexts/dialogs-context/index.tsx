// Modules
import { createContext, useState } from 'react';

// Types
import { DialogOptions, DialogsContextPayload, MessageDialogPayload } from './types';

export const DialogsContext = createContext({} as DialogsContextPayload);

export default function DialogsContextContainer ({ children }:any) {

  const [ messageDialog, setMessageDialog ] = useState<MessageDialogPayload | null>(null);
  const [ isNoEthereumDialogShowing, setIsNoEthereumDialogShowing ] = useState(false);
  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);

  const closeAnyDialog = () => setWhichDialogIsOpen(null);
  const closeMessageDialog = () => setMessageDialog(null);

  const payload:DialogsContextPayload = {
    messageDialog, setMessageDialog, closeMessageDialog, 
    isNoEthereumDialogShowing, setIsNoEthereumDialogShowing,
    whichDialogIsOpen, closeAnyDialog
  }

  return (
    <DialogsContext.Provider value={payload}>
      {children}
    </DialogsContext.Provider>
  )

}
