// Modules
import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children:ReactNode;
}

export default function GridXS12 ({ children }:Props) {
  return (
    <Grid xs={12} item>
      {children}
    </Grid>
  )
}