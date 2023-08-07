import React from 'react';

import { Grid, Typography } from '@mui/material';


const TypographyPage: React.FC = () => {
  
  return (
      <>
         TypographyPage Page

         <h1>Apresentacao dos Typography</h1>
         <Grid container justifyContent={"center"} textAlign={"center"}  gap={2}>

         <Grid item sx={{border: "1px solid blue"}} p={1} >
              <Typography variant='sectionTitle' fontFamily="montserrat"  >montserrat</Typography>
              <Typography variant='sectionTitle' fontFamily="montserrat"   >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="montserrat"  >SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="montserrat" >Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="montserrat"  >Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="montserrat"  >Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="montserrat" >Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="montserrat" >Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue"}} p={1} >
              <Typography variant='sectionTitle' fontFamily="Comic Sans MS"  >Comic Sans MS</Typography>
              <Typography variant='sectionTitle' fontFamily="Comic Sans MS"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Comic Sans MS" >SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Comic Sans MS" >Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Comic Sans MS" >Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Comic Sans MS" >Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Comic Sans MS">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Comic Sans MS">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='sectionTitle' fontFamily="Arial"  >Arial</Typography>
              <Typography variant='sectionTitle' fontFamily="Arial"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Arial">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Arial">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Arial">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Arial">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Arial">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Arial">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Candara">Candara</Typography>
              <Typography variant='sectionTitle' fontFamily="Candara">SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Candara">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Candara">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Candara">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Candara">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Candara">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Candara">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Calibri">Calibri</Typography>
              <Typography variant='sectionTitle' fontFamily="Calibri"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Calibri">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Calibri">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Calibri">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Calibri">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Calibri">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Calibri">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Consolas">Consolas</Typography>
              <Typography variant='sectionTitle' fontFamily="Consolas"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Consolas">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Consolas">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Consolas">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Consolas">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Consolas">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Consolas">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Courier">Courier</Typography>
              <Typography variant='sectionTitle' fontFamily="Courier"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Courier">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Courier">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Courier">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Courier">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Courier">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Courier">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Courier New">Courier New</Typography>
              <Typography variant='sectionTitle' fontFamily="Courier New"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Courier New">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Courier New">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Courier New">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Courier New">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Courier New">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Courier New">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Georgia">Georgia</Typography>
              <Typography variant='sectionTitle' fontFamily="Georgia"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Georgia">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Georgia">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Georgia">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Georgia">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Georgia">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Georgia">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Impact">Impact</Typography>
              <Typography variant='sectionTitle' fontFamily="Impact"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Impact">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Impact">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Impact">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Impact">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Impact">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Impact">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Impact">Times</Typography>
              <Typography variant='sectionTitle' fontFamily="Times"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Times">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Times">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Times">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Times">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Times">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Times">Exemplo de caption</Typography>
            </Grid>

            <Grid item sx={{border: "1px solid blue", }} p={1} >
              <Typography variant='h1' fontFamily="Verdana">Verdana</Typography>
              <Typography variant='sectionTitle' fontFamily="Verdana"  >SectionTitle Example</Typography>
              <Typography variant='sectionSubtitle' fontFamily="Verdana">SectionSubTitle Example</Typography>
              <br />
              <Typography variant='h1' fontFamily="Verdana">Exemplo de H1</Typography>
              <Typography variant='h2' fontFamily="Verdana">Exemplo de H2</Typography>
              <Typography variant='h3' fontFamily="Verdana">Exemplo de H3</Typography>
              <br />
              <Typography variant='body1' fontFamily="Verdana">Exemplo de body1</Typography>
              <Typography variant='caption' fontFamily="Verdana">Exemplo de caption</Typography>
            </Grid>

         </Grid>

      </>
  );
};

export default TypographyPage;