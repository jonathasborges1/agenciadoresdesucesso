interface IMailchimpConfig {
   API: string
   SERVER: string;
}

interface IMailchimpLead {
   FNAME: string;
   EMAIL: string;
   PHONE: string;
}

export enum MailchimpStatusEnum {
   ERROR = "error",
   SUCCESS = "success",
   SENDING = "sending",
   DEFAULT = "null"
}

export type MailchimpStatusType = MailchimpStatusEnum.ERROR | MailchimpStatusEnum.SUCCESS | MailchimpStatusEnum.SENDING | MailchimpStatusEnum.DEFAULT;

export type { IMailchimpLead, IMailchimpConfig }