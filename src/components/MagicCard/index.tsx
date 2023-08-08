import './card.css'; 
import React from 'react';
import { Paper } from '@mui/material';


interface Props {
   children?: React.ReactNode;
   src: string;
}

const MagicCard: React.FC<Props> = ({ children, src,  ...props }) => {
   //
   return (
    <Paper className='card' variant="outlined" sx={{ width:"100%", height:"100%" , background: "none", zIndex:0, border: "0px solid red"  }}>
      <img src={src} width={"100%"} height={"100%"} style={{border: "0px solid black", borderRadius:10, opacity:"1", }}/>
    </Paper>
   )
}

export default MagicCard;