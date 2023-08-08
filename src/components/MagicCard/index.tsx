import './card.css'; 
import React from 'react';
import { Paper } from '@mui/material';


interface Props {
   children?: React.ReactNode;
}

const MagicCard: React.FC<Props> = ({ children,  ...props }) => {
   //
   return (
    <Paper className='card' variant="outlined" sx={{ width:"100%", height:"100%" , background: "none", zIndex:0, border: "0px solid red"  }}>
      {children}
    </Paper>
   )
}

export default MagicCard;