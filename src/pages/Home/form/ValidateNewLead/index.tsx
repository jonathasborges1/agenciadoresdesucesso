import * as Yup from 'yup';
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";

import { Grid, LinearProgress, Typography } from "@mui/material";

import TextFieldPhone from "@components/TextFieldPhone";
import TextFieldCustom from "@components/TextFieldCustom";

import { IMailchimpLead, MailchimpStatusEnum } from "@modules/mailchimp/IMailchimp";
import useDialogAlert from "@hooks/useDialogAlert";
import ButtonPulse from '@components/ButtonPulse';
import { sendEmailElastic } from '@modules/smtp/sendEmail';

export interface IFormikValues {
  name: string;
  email: string;
  phone: string;
}

const leadInit: IMailchimpLead = {
  FNAME: "",
  EMAIL: "",
  PHONE: "",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
  phone: Yup.string().required("O telefone é obrigatório"),
});

interface ValidateNewLeadProps{
   status: any;
   message: any;
   onValidated: (data: any) => void;
}

const ValidateNewLead: React.FC<ValidateNewLeadProps> = ({status, message, onValidated}) => {

  const [ payloadSendEmailElastic, setPayloadSendEmailElastic ] = useState<IMailchimpLead>(leadInit);
  const { snackbar } = useDialogAlert();

  const successMessage = (status: string) => {
    if(status === MailchimpStatusEnum.SUCCESS){
      // Rotina para disparar email automatico
      sendEmailElastic(payloadSendEmailElastic);

      console.info("[INFO]:[successMessage] ", message);
      snackbar({
        message: `Usuario Cadastrado com Successo!e!`,
        variant: "success",
      });
    }
  }

  const errorMessage = (status: string) => {
    if(status === MailchimpStatusEnum.ERROR){
      console.info("[INFO]:[errorMessage] ", message);
      snackbar({
        message: `Ops, algo nao ocorreu bem, tente novamente!`,
        variant: "error",
      });
    }
  }

  useEffect(() => {
    successMessage(status)
    errorMessage(status);
  }, [status]);

  const handleSubmit = async(values: any, actions:any) => {
    // Faça alguma ação com os valores do formulário aqui
    console.log(values);
    try {
      const payload: IMailchimpLead = {
        FNAME: values.name,
        EMAIL: values.email,
        PHONE: values.phone,
      }

      onValidated(payload);
      setPayloadSendEmailElastic(payload);

    } catch (error) {
       console.info("[INFO]:[handleSubmit][ERROR] ", error);
    }finally{}
  };

  const handleWhatsAppButtonClick = (name: string) => {
    // const phoneNumber = '+5511948831501'; // Substitua pelo número real, incluindo código de país
    // const message = encodeURIComponent(`Olá, eu sou o ${name}! e Estou interessado em participar do grupo agenciador de viagem.`); // Mensagem pré-definida

    // window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.location.href = "https://chat.whatsapp.com/HnR67LlKfiGHILt7fa1oed"
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>

          {status === MailchimpStatusEnum.SENDING ? (<LinearProgress />)
            :
            status === MailchimpStatusEnum.SUCCESS ?
                (
                  <div>
                    <Typography variant='body1' sx={{ color: "#000" }}>Parabéns <b>{values.name || "!"} </b>  </Typography>
                    <ButtonPulse
                      variant={"contained"}
                      onClick={() => handleWhatsAppButtonClick(values.name)}
                      sx={{ borderRadius: 3, backgroundColor: "#fde910", padding: 1.8 }}
                    >
                      <Typography variant={"h3"} sx={{ color: "#000", fontWeight: { xs: 800, lg: 700 }, fontSize: { xs: 14, lg: 21 }, }}>
                        Entrar no Grupo do Whatsapp
                      </Typography>
                    </ButtonPulse>
                  </div>
                )
              :
                (
                  <Grid container gap={2}>
                    {/* NOME */}
                    <Grid item xs={12}>

                      <TextFieldCustom
                        type={"text"}
                        name={"name"}
                        label={"Nome Completo"}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.name && errors.name}
                        error={touched.name && Boolean(errors.name)}
                        fullWidth />

                    </Grid>

                    {/* EMAIL */}
                    <Grid item xs={12}>
                      <TextFieldCustom
                        type={"email"}
                        name={"email"}
                        label={"Email"}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.email && errors.email}
                        error={touched.email && Boolean(errors.email)}
                        fullWidth />
                    </Grid>

                    {/* TELEFONE */}
                    <Grid item xs={12}>
                      <TextFieldPhone
                        type={"text"}
                        name={"phone"}
                        label={"Telefone"}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.phone && errors.phone}
                        error={touched.phone && Boolean(errors.phone)}
                        fullWidth />

                    </Grid>

                    {/* BOTAO DE SUBMISSAO */}
                    <Grid item xs={12}>

                      <ButtonPulse
                        type={"submit"}
                        variant={"contained"}
                        sx={{
                          border: "0px solid black",
                          fontWeight: 700,
                          background: "#90ee90", color: "#fff", pt: 2, pb:2, pl: 4.2, pr: 4.2, fontSize: "1rem",
                          "&:hover": { backgroundColor: '#90ee90', color: '#000' }
                        }}
                      >
                        <Typography variant="h3" sx={{ fontWeight: 700, color: "#000", fontSize: { xs: 23, lg: 24 } }}>
                          Quero Participar
                        </Typography>

                      </ButtonPulse>

                    </Grid>

                  </Grid>
                )
              }
        </Form>
      )}
    </Formik>
  );
};

export default ValidateNewLead;
