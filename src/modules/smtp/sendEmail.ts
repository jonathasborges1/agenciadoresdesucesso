import { Configuration, EmailsApi, EmailMessageData } from '@elasticemail/elasticemail-client-ts-axios';
import { IMailchimpLead } from '@modules/mailchimp/IMailchimp';

export type BodyContentType = "HTML" | "PlainText" | "AMP" | "CSS"
export enum BodyContentTypeEnum {
   HTML = "HTML",
   PlainText = "PlainText",
   AMP = "AMP",
   CSS = "CSS"
}

const config = new Configuration({
   apiKey: "8842AEB52C9218EDDC5878B442AD8D9C51DDFADE6AC87A86A064622AF06F28978DF9BB002E2BCD659167B53A3B638152"
});

const emailsApi = new EmailsApi(config);

const fromSend = "suporteagenciador10x@gmail.com"
// const toSend = "jbc@icomp.ufam.edu.br"
const subjectSend = "Sistema de Notificacao de Email - AgenciadoresDeSucesso - Feito com Elastic Email v1.0.0"

export const sendEmailElastic = (data: IMailchimpLead) => {

   const bodyEmail = () => {
      const body = `
      <html>
      <body>
        <h1>Lead Cadastrado com Sucesso</h1>
        <p>
            Nome: <b> ${data.FNAME} </b>
        </p>
         <p>
            Telefone: <b> ${data.PHONE} </b>
         </p>
         <p>
            Email: <b>  ${data.EMAIL} </b>
         </p>
        <span>Este é um exemplo de email personalizado com Elastic Email.</span>
        <p>Atenciosamente,</p>
        <span>${fromSend}</span>
      </body>
      </html>
      `
      return body;
   }

    try {
      const emailMessageData = {
         Recipients: [
           { 
             Email: "jbc@icomp.ufam.edu.br",
             Fields: {
               name: "Jonathas Borges Cavalcante"
             }
           },
           {
            Email: "natalymaiasocialmedia@gmail.com",
            Fields: {
               name: "Nataly Maia"
             }
           },
           {
            Email: "vinicius.guerra.viagens@gmail.com",
            Fields: {
               name: "Vinicius Guerra"
             }
           }
         ],
         Content: {
           Body: [
             {
               ContentType: BodyContentTypeEnum.HTML,
               Charset: "utf-8",
               Content: bodyEmail()
             },
             {
               ContentType: BodyContentTypeEnum.PlainText,
               Charset: "utf-8",
               Content: "Hi {name}!"
             }
           ],
           From: fromSend,
           Subject: subjectSend
         }
       };
      


       const sendBulkEmails = (emailMessageData: EmailMessageData): void => {
          emailsApi.emailsPost(emailMessageData).then((response) => {
             console.log('API called successfully.');
             console.info(response.data);
         }).catch((error) => {
             console.error(error);
         });
       };
        
      sendBulkEmails(emailMessageData)

    } catch (error) {
      console.log("sendEmailElastic -> error: ",error);
      throw error;
    }finally{
      console.log("sendEmailElastic -> finally");
    }  
}