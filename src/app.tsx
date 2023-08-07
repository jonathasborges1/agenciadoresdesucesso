import React from 'react';
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";

import { AuthProvider } from '@hooks/AuthContext';

import ThemeProvider from '@components/Theme/themeProvider';
import RouterProvider from '@components/Routes';

import ReactPixel, { AdvancedMatching } from 'react-facebook-pixel';

// Configuração do pixel
const options: AdvancedMatching = {
   ct: '',
   country: '',
   db: '',
   em: '',
   fn: '',
   ge: '',
   ln: '',
   ph: '',
   st: '',
   zp: ''
};
 
// Inicializa o pixel com o ID do seu pixel do Facebook
ReactPixel.init('137959149307029', options);

// Rastreia a visualização de página
ReactPixel.pageView();
interface Props {
   children?: React.ReactNode;
}

const App: React.FC<Props> = ({ children, ...props }) => {
   return (
      <ThemeProvider>
         <SnackbarProvider>
            <CssBaseline />
            <AuthProvider>
               <RouterProvider/>
            </AuthProvider>
         </SnackbarProvider>
      </ThemeProvider>
   )
}

export default App;