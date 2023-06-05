// Colors
import { blue, grey } from "@mui/material/colors";
import FlexStyles from "../../../styles";

const ScreenContainerStyles = {

  MainContainer: {
    minHeight: '100vh',
    width:'100vw',
  },

  TopBarContainer: {
    backgroundColor:blue[800],
    padding:2,
    rowGap:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  TopBarButtonContainer: {
    paddingY:1,
    paddingLeft:1,
    backgroundColor:grey[100],
    borderBottom:`1px solid ${grey[300]}`,
    ...FlexStyles.HStack
  },

  ContentContainer: {
    padding:2,
    rowGap:2
  }

}

export default ScreenContainerStyles;