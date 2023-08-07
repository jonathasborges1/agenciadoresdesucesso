import { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import AtemTheme from "@components/Theme/index";

interface Props {
   children: ReactNode;
 }
 
 const ThemeProvider: React.FC<Props> = ({children})  => {
    return(
     <MuiThemeProvider theme={AtemTheme}>
        {children}
     </MuiThemeProvider>
    ) 
  };
  
 export default ThemeProvider;