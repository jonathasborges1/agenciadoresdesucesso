import React from 'react';
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";

import { AuthProvider } from '@hooks/AuthContext';

import ThemeProvider from '@components/Theme/themeProvider';
import RouterProvider from '@components/Routes';

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