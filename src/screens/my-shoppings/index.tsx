// Modules
import { useContext } from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';

// Components
import MyShoppingsContextContainer from './contexts';
import PaperStack from '../../components/shared/paper-stack';
import ScreenContainer from '../../components/layout/screen-container';
import GridXS12MD6LG4 from '../../components/layout/_grid/grid-xs12-md6-lg4';

// Contexts
import { ValuesContext } from './contexts/values';

// Data
import { UserShoppingsData } from '../../types/item';

// Hooks
import useFunctions from './functions';
import useOnCreate from './functions/onCreate';

export default function MyShoppingsScreen () {
  return (
    <MyShoppingsContextContainer>
      <MainContainer/>
    </MyShoppingsContextContainer>
  )
}

function MainContainer () {
  return (
    <ScreenContainer>
      <Typography variant='subtitle1'>MIS COMPRAS</Typography>
      <MyShoppingsContainer/>
    </ScreenContainer>
  )
}

function MyShoppingsContainer () {
  useOnCreate();
  const { userShoppings } = useContext(ValuesContext);
  return (
    <Grid container spacing={2}>
      {userShoppings.map((item, index) => <ItemCard {...item} key={index}/>)}
    </Grid>
  )
}

function ItemCard (data:UserShoppingsData) {
  const { amount, brand, category, model, price, idItem } = data;
  const { goToItemDetails } = useFunctions();
  return (
    <GridXS12MD6LG4>
      <PaperStack title={category}>
        <img src='../materialdesign.png' height='180px'/>
        <Stack>
          <Typography variant='subtitle2'>MARCA: {brand}</Typography>
          <Typography variant='subtitle2'>MODELO: {model}</Typography>
          <Typography variant='subtitle2'>PRECIO: {price}</Typography>
          <Typography variant='subtitle2'>CANTIDAD: {amount}</Typography>
        </Stack>
        <Button variant='contained' onClick={() => goToItemDetails(idItem)}>Volver a Comprar</Button>
      </PaperStack> 
    </GridXS12MD6LG4>
  )
}