// Modules
import { useContext } from 'react';
import { Typography } from '@mui/material';

// Components
import DialogStack from '../../components/shared/dialog-stack';

// Contexts
import { DialogsContext } from '../../contexts/dialogs-context';

export default function NoEthereumDialog () {
  const { isNoEthereumDialogShowing } = useContext(DialogsContext);
  return (
    <DialogStack title='Conexión con contrato no exitosa' isOpen={isNoEthereumDialogShowing}>
      <Typography>Recarga tu navegador y configura bien la conexión</Typography>
    </DialogStack>
  )
}
