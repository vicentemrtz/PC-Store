// Modules
import { createContext, useState } from 'react';

// Types
import { DialogOptions, DialogsContextPayload } from './types';

export const DialogsContext = createContext({} as DialogsContextPayload);

export default function DialogsContextContainer ({ children }:any) {

  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);
  const closeAnyDialog = () => setWhichDialogIsOpen(null);

  const payload:DialogsContextPayload = {
    whichDialogIsOpen,
    closeAnyDialog
  }

  return (
    <DialogsContext.Provider value={payload}>
      {children}
    </DialogsContext.Provider>
  )

}
