// Modules
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';

// Components
import ItemDetailsContextContainer from './contexts';
import PaperStack from '../../components/shared/paper-stack';
import SimpleSelect from '../../components/form/simple-select';
import ScreenContainer from '../../components/layout/screen-container';
import GridXS12MD6LG4 from '../../components/layout/_grid/grid-xs12-md6-lg4';

// Contexts
import { FormContext } from './contexts/form';
import { ValuesContext } from './contexts/values';

// Data
import { amountOptions } from '../../data';

// Hooks
import useSubmit from './functions/submit';
import useValidate from './functions/validate';
import useOnCreate from './functions/onCreate';

export default function ItemDetailsScreen () {
  const {  } = useParams();
  return (
    <ItemDetailsContextContainer>
      <MainContainer/>
    </ItemDetailsContextContainer>
  )
}

function MainContainer () {
  useOnCreate();
  return (
    <ScreenContainer>
      <Grid container spacing={2}>
        <ItemDetailsContainer/>
        <FormContainer/>
      </Grid>
    </ScreenContainer>
  )
}

function ItemDetailsContainer () {
  const { item } = useContext(ValuesContext);
  return (
    <GridXS12MD6LG4>
      <PaperStack title={item?.category}>
      <img src='../materialdesign.png' height='200px'/>
        <Stack>
          <Typography variant='subtitle2'>MODELO: {item?.model}</Typography>
          <Typography variant='subtitle2'>MARCA: {item?.category}</Typography>
          <Typography variant='subtitle2'>PRECIO: ${item?.price}</Typography>
        </Stack>
        <Typography variant='caption'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum exercitationem assumenda architecto harum fugiat? Rerum, facere quo quaerat quas earum nobis fuga debitis ab dignissimos porro praesentium nam nihil illo.</Typography>
      </PaperStack>
    </GridXS12MD6LG4>
  )
}

function FormContainer () {

  const { startSubmitBuyItem } = useSubmit();
  const { validateBuyForm } = useValidate();
  const { buyForm } = useContext(FormContext);
  const { form, handleOnChange } = buyForm;
  const { amount, price, total } = form;

  return (
    <GridXS12MD6LG4>
      <PaperStack title='Realizar Compra'>

        <TextField 
          size='small' 
          variant='filled' 
          label='Precio' 
          value={price}
          disabled
        />

        <SimpleSelect 
          label='Cantidad' 
          name='amount' 
          options={amountOptions} 
          value={amount}
          onChange={handleOnChange}
          hasDefaultOption={false}
        />

        <TextField 
          size='small' 
          variant='filled' 
          label='Total' 
          value={total}
          name='total'
          disabled
        />

        <Button variant='contained' disabled={!validateBuyForm()} onClick={startSubmitBuyItem}>Realizar Compra</Button>

      </PaperStack>
    </GridXS12MD6LG4>
  )
}