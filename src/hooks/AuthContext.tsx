import React, {createContext, useCallback, useContext,} from "react";

import { LoginAuthServiceResponse } from "@modules/user/models/IAuthService";
import appConfig from "@config/index";

interface AuthProviderProps {
   children?: React.ReactNode;
}

export interface AuthContextProps {
   loadingLogout: boolean;
   token: LoginAuthServiceResponse | null;
   setToken: React.Dispatch<React.SetStateAction<LoginAuthServiceResponse | null>>;
   logout: () => Promise<void>;
 }

 const AuthContext = createContext({} as AuthContextProps);

 export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [token, setToken] = React.useState<LoginAuthServiceResponse | null>(() => {
    const token = localStorage.getItem(appConfig.auth.keys.token);
    return token ? JSON.parse(token) : null;
  });

  const [loadingLogout, setLoadingLogout] = React.useState(false);

  const logout = React.useCallback(async() => {},[]);

   return (
      <AuthContext.Provider value={{ token, loadingLogout, setToken, logout }}>
        {children}
      </AuthContext.Provider>
    );
 }

 export const useAuth = () => {
   const context = useContext(AuthContext);
   if(Object.values(context).length === 0){
      throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
   }
   return context;
 }