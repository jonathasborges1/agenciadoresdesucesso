import React from "react";
import { Navigate, PathRouteProps } from "react-router-dom";

import { useAuth } from "@hooks/AuthContext";
import ROUTES from "@config/routes";

interface PrivateRouteProps extends PathRouteProps {}

 const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, ...props }) => {
   const authContext = useAuth();

   if (authContext.token && Component) {
      return <Component/>
   }

   authContext.logout();
   return <Navigate to={ROUTES.LOGIN} replace />
}

export default PrivateRoute;