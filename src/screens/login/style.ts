// Modules
import { blue } from "@mui/material/colors";

// Styles
import FlexStyles from "../../styles";

const LoginScreenStyle = {

  MainContainer: {
    height: '100vh',
    width: '100%',
    backgroundColor:blue[600]
  },

  MainPaddingContainer: {
    padding: 2,
    height:'100%',
    ...FlexStyles.ACenterJCenter,
  }

}

export default LoginScreenStyle;