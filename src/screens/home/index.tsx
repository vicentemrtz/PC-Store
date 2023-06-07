// Modules
import { useContext } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";

// Components
import HomeContextContainer from "./contexts";
import PaperStack from "../../components/shared/paper-stack";
import SimpleSelect from "../../components/form/simple-select";
import ScreenContainer from "../../components/layout/screen-container";
import GridXS12MD6LG4 from "../../components/layout/_grid/grid-xs12-md6-lg4";

// Contexts
import { FormContext } from "./contexts/form";
import { ValuesContext } from "./contexts/values";

// Hooks
import useFunctions from "./functions";
import useOnCreate from "./functions/onCreate";

// Styles
import FlexStyles from "../../styles";

// Types
import { GetItemData } from "../../types/item";

export default function HomeScreen () {
  return (
    <HomeContextContainer>
      <MainContainer/>
    </HomeContextContainer>
  )
}

function MainContainer () {
  useOnCreate();
  return (
    <ScreenContainer>
      <FilterContainer/>
      <ItemsContainer/>
    </ScreenContainer>
  )
}

function FilterContainer () {

  const { brands, categories, isLoadingGetItems } = useContext(ValuesContext);
  const { filterForm } = useContext(FormContext);
  const { form, handleOnChange } = filterForm;
  const { brand_filter, category_filter, model_filter } = form;

  return (
    <PaperStack title='Aplicar Filtros'>
      <Stack sx={FlexStyles.HStack}>

        <SimpleSelect 
          label='Marca' 
          name='brand_filter'
          value={brand_filter}
          onChange={handleOnChange}
          options={brands}
          disabled={isLoadingGetItems}
        />

        <SimpleSelect 
          label='Categoría' 
          name='category_filter'
          onChange={handleOnChange}
          value={category_filter}
          options={categories}
          disabled={isLoadingGetItems}
        />

        <TextField 
          label='Modelo' 
          name='model_filter'
          onChange={handleOnChange}
          value={model_filter}
          size="small"
          variant="filled"
          disabled={isLoadingGetItems}
          fullWidth
        />

      </Stack>
    </PaperStack>
  )
}

function ItemsContainer () {
  const { itemsToShow } = useContext(ValuesContext);
  return (
    <Stack rowGap={2}> 
      <Typography variant="subtitle1">INICIO</Typography>
      <Grid container spacing={2}>
        {itemsToShow.map((item, key) => <ItemCard {...item} key={key} />)}
      </Grid>
    </Stack>
  )
}

function ItemCard ({ id, brand, category, model, price }:GetItemData) {
  const { goToItemDetails } = useFunctions();
  return (
    <GridXS12MD6LG4>
      <PaperStack title={category}>
        <img src='materialdesign.png' height='200px'/>
        <Stack>
          <Typography variant='subtitle2'>MARCA: {brand}</Typography>
          <Typography variant='subtitle2'>MODELO: {model}</Typography>
          <Typography variant='subtitle2'>PRECIO: ${price}</Typography>
        </Stack>
        <Button variant='contained' onClick={() => goToItemDetails(id)}>Comprar</Button>
      </PaperStack>
    </GridXS12MD6LG4>
  )
}