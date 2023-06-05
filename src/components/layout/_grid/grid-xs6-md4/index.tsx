// Modules
import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children:ReactNode;
}

export default function GridXS12LG4 ({ children }:Props) {
  return (
    <Grid xs={6} md={4} item>
      {children}
    </Grid>
  )
}