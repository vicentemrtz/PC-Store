// Modules
import { useContext } from "react";
import { Button, Grid, Stack, TextField } from "@mui/material";

// Components
import LoginScreenContextContainer from "./contexts";
import PaperStack from "../../components/shared/paper-stack";
import GridXS12MD6LG4 from "../../components/layout/_grid/grid-xs12-md6-lg4";

// Contexts
import { FormContext } from "./contexts/form";

// Hooks
import useSubmit from "./functions/submit";
import useValidate from "./functions/validate";

// Styles
import LoginScreenStyle from "./style";

export default function LoginScreen () {
  return (
    <LoginScreenContextContainer>
      <MainContainer/>
    </LoginScreenContextContainer>
  )
}

function MainContainer () {
  return (
    <Stack sx={LoginScreenStyle.MainContainer}>
      <Stack sx={LoginScreenStyle.MainPaddingContainer}>
        <Grid container justifyContent='center'>
          <LoginFormContainer/>
        </Grid>
      </Stack>
    </Stack>
  )
}

function LoginFormContainer () {

  const { validateLoginValues } = useValidate();
  const { startSubmitLogin, isLoadingLogin } = useSubmit();
  const { loginForm } = useContext(FormContext);
  const { form, handleOnChange } = loginForm;
  const { username, password } = form;

  return (
    <GridXS12MD6LG4>
      <PaperStack title='Iniciar Sesión'>

        <TextField 
          label='Usuario' 
          variant="filled" 
          size='small'
          value={username}
          name="username"
          onChange={handleOnChange}
        />

        <TextField 
          label='Contraseña' 
          variant="filled" 
          size='small'
          value={password}
          name="password"
          onChange={handleOnChange}
        />

        <Button 
          variant='contained' 
          onClick={startSubmitLogin} 
          disabled={!validateLoginValues(isLoadingLogin)}
        >Ingresar</Button>

      </PaperStack>
    </GridXS12MD6LG4>
  )
}