import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const Login: React.FC<Props> = ({ children, ...props }) => {
   return (
      <> 
         <h1>Login Page</h1>
         {children}
      </>
   )
}

export default Login;