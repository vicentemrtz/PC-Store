// Modules
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// Styles
import ScreenContainerStyles from './types';

type Props = { children: React.ReactNode }

export default function ScreenContainer ({ children }:Props) {
  return (
    <Stack sx={ScreenContainerStyles.MainContainer}>
      <TopBar/>
      <TopBarButtonContainer/>  
      <Stack sx={ScreenContainerStyles.ContentContainer}>{children}</Stack>
    </Stack>
  )
}

function TopBar () {
  return (
    <Stack sx={ScreenContainerStyles.TopBarContainer}>
      <Typography {...TopBarTitleProps}>PC SHOP</Typography>
    </Stack>
  )
}

function TopBarButtonContainer () {
  const navigate = useNavigate();
  return (
    <Stack sx={ScreenContainerStyles.TopBarButtonContainer}>
      {topButtonList.map(({ route, text }, key) => <Button variant='text' size='small' color='inherit' key={key} onClick={() => navigate(route)}>{text}</Button>)}
    </Stack>
  )
}

const TopBarTitleProps = {
  fontSize:'16px', 
  color:'white',
  fontWeight:'bold',
  textTransform:'uppercase',
  paddingLeft:1
} as any;

const topButtonList = [{ route:'/', text:'Inicio' }, { route:'/my-shoppings', text:'Mis Compras' }]