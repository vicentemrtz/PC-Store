// Modules
import { useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';

// Components
import FlexStyles from '../../styles';
import DialogStack from '../../components/shared/dialog-stack';

// Contexts
import { DialogsContext } from '../../contexts/dialogs-context';

export default function MessageDialog () {

  const { messageDialog, closeMessageDialog } = useContext(DialogsContext);

  return (
    <DialogStack title={messageDialog?.title || ''} isOpen={messageDialog != null}>
      
      <Typography>{messageDialog?.body}</Typography>

      <Stack sx={FlexStyles.HStackACenterJEnd}>
        <Button variant='contained' onClick={closeMessageDialog}>Ok</Button>
      </Stack>

    </DialogStack>
  )
}
