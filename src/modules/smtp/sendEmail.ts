import { Configuration, EmailsApi, EmailMessageData, EmailTransactionalMessageData } from '@elasticemail/elasticemail-client-ts-axios';
import { IMailchimpLead } from '@modules/mailchimp/IMailchimp';
import { format } from 'date-fns';

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
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'dd/MM/yyyy \'as\' HH:mm:ss');

      const body = `
      <html>
      <body>
        <h1>Lead Cadastrado com Sucesso</h1>
        <p>
            Nome: <b>${data.FNAME}</b>
        </p>
         <p>
            Telefone: <b>${data.PHONE}</b>
         </p>
         <p>
            Email: <b>${data.EMAIL}</b>
         </p>
         <p>
            Data do Cadastro: <b>${formattedDate}</b>
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
      // const emailMessageData = {
      //    Recipients: [
      //      { 
      //        Email: "jbc@icomp.ufam.edu.br",
      //        Fields: {
      //          name: "Jonathas Borges Cavalcante"
      //        }
      //      },
      //      {
      //       Email: "natalymaiasocialmedia@gmail.com",
      //       Fields: {
      //          name: "Nataly Maia"
      //        }
      //      },
      //      {
      //       Email: "vinicius.guerra.viagens@gmail.com",
      //       Fields: {
      //          name: "Vinicius Guerra"
      //        }
      //      },
      //      {
      //       Email: "jonathasborges0@gmail.com",
      //       Fields: {
      //          name: "Jonathas Borges"
      //        }
      //      }
      //    ],
      //    Content: {
      //      Body: [
      //        {
      //          ContentType: BodyContentTypeEnum.HTML,
      //          Charset: "utf-8",
      //          Content: bodyEmail()
      //        },
      //        {
      //          ContentType: BodyContentTypeEnum.PlainText,
      //          Charset: "utf-8",
      //          Content: "Hi {name}!"
      //        }
      //      ],
      //      From: fromSend,
      //      Subject: subjectSend
      //    }
      // };

      const emailTransactionalMessageData  = {
         Recipients: {
            To: ["jbc@icomp.ufam.edu.br"],
            CC: ["natalyemaia@gmail.com","vinicius.guerra.viagens@gmail.com","jonathasborges0@gmail.com"],
         },
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
               Content: "Example content"
             }
           ],
           From: fromSend,
           Subject: subjectSend
         }
       };
      
       const sendTransactionalEmails = (emailTransactionalMessageData: EmailTransactionalMessageData): void => {
         emailsApi.emailsTransactionalPost(emailTransactionalMessageData).then((response) => {
             console.log('API called successfully.');
             console.log(response.data);
         }).catch((error) => {
             console.error(error);
         });
       };

       sendTransactionalEmails(emailTransactionalMessageData);


      //  const sendBulkEmails = (emailMessageData: EmailMessageData): void => {
      //     emailsApi.emailsPost(emailMessageData).then((response) => {
      //        console.log('API called successfully.');
      //        console.info(response.data);
      //    }).catch((error) => {
      //        console.error(error);
      //    });
      //  };
        
      // sendBulkEmails(emailMessageData)

    } catch (error) {
      console.log("sendEmailElastic -> error: ",error);
      throw error;
    }finally{
      console.log("sendEmailElastic -> finally");
    }  
}