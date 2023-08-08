import React from 'react';
import { Grid, Paper, Typography, } from '@mui/material';

import MailchimpFormSubscribe from '@pages/Home/form/MailchimpFormSubscribe';

import expertPhoto from '../../assets/images/agenciador-de-viagem-vinicius.jpeg';
import MagicCard from '@components/MagicCard';

const Home: React.FC = () => {
  
  const data = {
    titleSection: "Tenha liberdade geográfica, ou Trabalhe no conforto da sua casa, faturando 5 a 10k sendo um agenciador de viagem.",
    subTitleSection: "Vou te ensinar passo a passo no grupo exclusivo via zoom nos dias 17, 22 e 29 de agosto",
    TitleForm: "Aulas ao vivo dia 17, 22 e 29 de agosto as 20h",
    footerForm: "Seus dados estão protegidos", // Ao continuar você está aceitando nossa política de privacidade e termos de uso, como cookies e recebimento de mensagens.
  }

  return (
      <Grid container justifyContent={"center"} 
        sx={{
          border: "0px solid red", 
          gap:{xs:4,lg:2},
          paddingTop: {xs: 10, lg: 8}, 
          padding: {xs:1,lg:4}, 
          textAlign: {xs: "center", lg:"left"} 
        }} 
      >  
        <Grid item xs={12} md={6} lg={6} sx={{border: "0px solid red", padding: {xs:1,lg:2}}}>
          
          <Grid container gap={4} sx={{border: "0px solid red"}}>

            <Grid item xs={12}>
              <Typography variant={"h1"} sx={{fontWeight:800 , fontSize: {xs: 22, lg:28}, marginTop: {xs:2}  }}>
                {data.titleSection}
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ border:"0px solid black",  }}>

              <Grid container justifyContent={"center"} sx={{ border:"0px solid red"}} gap={1}>
                <Grid item sx={{width: {xs:"280px", lg: "280px"}, height: {xs:"280px", lg:"300px"},border:"0px solid red"}}>
                  <MagicCard >
                    <img src={expertPhoto} alt="Agenciador de Viagem - Vinicius Guerra" width={"100%"} height={"100%"} style={{borderRadius:10 }}/>
                  </MagicCard>
                </Grid>

                <Grid item xs={12} textAlign={"center"}> 
                  <Typography sx={{fontSize: {xs:10}}} >
                      <b style={{color: "greenyellow"}} >Vinicius Guerra</b>  - Mentor Agenciador 10x 
                    </Typography>
                </Grid>

              </Grid>

              <Grid container justifyContent={"center"}>

              </Grid>

            </Grid>

            <Grid item xs={12}>
              <Typography variant={"h3"} sx={{fontWeight:500, fontSize: {xs: 20, lg:24}}} >
                {data.subTitleSection}
              </Typography>
            </Grid>


          </Grid>

        </Grid>

        <Grid item xs={12} md={5} lg={5} sx={{border: "1px solid white", borderRadius:4, background: "#fff", padding: {xs:1,lg:5} }}>

          <Grid container justifyContent={"center"} sx={{border: "0px solid red", textAlign:"center", gap:{xs:0,lg:0}}} >
            
            <Grid item xs={12}>
              <Typography variant='h1' sx={{color: "#000", fontWeight:700, fontSize: {xs: 20, lg:28}, paddingTop: {xs:2}}}>
                {data.TitleForm}
              </Typography>  
            </Grid>

            <Grid item xs={12} sx={{border: "0px solid black", paddingX: {xs:1,lg:5}, paddingTop: {xs:1,lg:5}, paddingBottom: {xs:1,lg:1} }}>
              <MailchimpFormSubscribe></MailchimpFormSubscribe>
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{color: "#000", fontWeight:{xs:400,lg:400}, fontSize: {xs: 10, lg:12}, paddingTop: {xs:0}}}>
                {data.footerForm}
              </Typography>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
  );
};

export default Home;