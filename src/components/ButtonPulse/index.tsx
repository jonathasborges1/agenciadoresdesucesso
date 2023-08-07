import './PulsatingButton.css';
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface props extends ButtonProps {
  children?: React.ReactNode;
  sx?: Record<string, any>; // Usar a prop sx para estilos
}

const ButtonPulse: React.FC<props> = ({children, ...props}) => {
  return (
    <Button {...props} className='pulse-button'>
      {children}
    </Button>
  );
};

export default ButtonPulse;
