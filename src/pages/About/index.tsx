import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const About: React.FC<Props> = ({ children, ...props }) => {
   return (
      <>
         <h1>About Page</h1>
         {children}
      </>
   )
}

export default About;