// import axios from 'axios';
// import appConfig from '@config/index';

// import { ILead } from '@modules/mailchimp/IMailchimp';
// import mailchimp from '@mailchimp/mailchimp_marketing';

// // import mailchimp from "mailchimp/mailchimp_marketing";
// // import mailchimp from '@mailchimp/mailchimp_marketing';
// // import Mailchimp from 'mailchimp-api-v3';
// // var Mailchimp = require('mailchimp-api-v3')

// mailchimp.setConfig({
//    apiKey: appConfig.api.key,
//    server: "us21"
//  });

// export async function cadastrarLead(lead: ILead) {
//   try {
//     const data = {
//       email_address: lead.email,
//       status: 'subscribed',
//       merge_fields: {
//         FNAME: lead.nome,
//         LNAME: 'Sobrenome',
//       },
//     };

//     const response = await axios.post(`${appConfig.api.url}/${appConfig.api.audienceId}/members`,
//       data,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `apikey ${appConfig.api.key}`,
//         },
//       }
//     );

//     console.log('Novo lead cadastrado com sucesso!');
//     console.log(response.data);
//   } catch (error:any) {
//     console.error('Erro ao cadastrar novo lead:', error);
//     throw new Error(error);
//   }
// }

// export async function cadastrarLeadAPI(lead: ILead) {
//    try {

//       const response = await mailchimp.lists.addListMember(appConfig.api.audienceId, {
//          email_address: lead.email,
//          status: "subscribed",
//          merge_fields: {
//            FNAME: lead.nome,
//            LNAME: "Teste"
//          }
//        });

//        console.log(
//          `Successfully added contact as an audience member. The contact's id is ${
//            response.id
//          }.`
//        );
//    } catch (error:any) {
//       throw new Error(error);
//    }
// }

// export async function cadastrarLeadV3(lead: ILead) {
//    try {
//       const mailchimpv3 = new Mailchimp(appConfig.api.key);
//       mailchimpv3.post(`/lists/${appConfig.api.audienceId}/members`, {
//          email_address: 'jack@example.com',
//          status: 'subscribed',
//          merge_fields: {
//            FNAME: 'Jack',
//            EMAIL: 'jack@example.com',
//            COMPANY: 'Apple'
//          }
//        })
//    } catch (error:any) {
//       throw new Error(error);
//    }
// }

// export async function criarAudiencia() {
//    try {

//       mailchimp.setConfig({
//          apiKey: appConfig.api.key,
//          server: "us21"
//        });
       
//        const event = {
//          name: "JS Developers Meetup"
//        };
       
//        const footerContactInfo = {
//          company: "Mailchimp",
//          address1: "675 Ponce de Leon Ave NE",
//          address2: "Suite 5000",
//          city: "Atlanta",
//          state: "GA",
//          zip: "30308",
//          country: "US"
//        };
       
//        const campaignDefaults = {
//          from_name: "Gettin' Together",
//          from_email: "gettintogether@example.com",
//          subject: "JS Developers Meetup",
//          language: "EN_US"
//        };

//        const payloadData = {
//          name: event.name,
//          contact: footerContactInfo,
//          permission_reminder: "permission_reminder",
//          email_type_option: true,
//          campaign_defaults: campaignDefaults
//        }

           
//    //  async function run() {
//    //    const response = await mailchimp.lists.createList({
//    //      name: event.name,
//    //      contact: footerContactInfo,
//    //      permission_reminder: "permission_reminder",
//    //      email_type_option: true,
//    //      campaign_defaults: campaignDefaults
//    //    });
    
//    //    console.log(`Successfully created an audience. The audience id is ${response.id}.`);
//    //  }

//    //  await run();

   
//    const response = await axios.post(`https://us21.api.mailchimp.com/3.0/lists`,
//    payloadData,
//    {
//      headers: {
//        'Content-Type': 'application/json',
//        Authorization: `apikey ${appConfig.api.key}`,
//      },
//    }
//  );

//    } catch (error:any) {
//       throw new Error(error);
//    }

// }

// export async function reactMailChimpSubscribe(){

// }

