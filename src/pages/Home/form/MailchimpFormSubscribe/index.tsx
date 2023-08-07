
import MailchimpSubscribe from "react-mailchimp-subscribe"
import ValidateNewLead from "@pages/Home/form/ValidateNewLead";

interface MailchimpFormSubscribeProps {}

const MailchimpFormSubscribe: React.FC<MailchimpFormSubscribeProps> = () => {
      
      const url_base = "https://agenciadoresdesucesso.us21.list-manage.com/subscribe/post"
      const url_u = "523ee83a19f69e627141813d7"
      const url_id = "081e7a3742"
      const f_id = "00382ee7f0"
   
      const url = `${url_base}?u=${url_u}&amp;id=${url_id}&amp;f_id=${f_id}`;

       return (
          <div className="mc__form-container">
              <MailchimpSubscribe
                  url={url}
                  render={({ subscribe, status, message }) => (
                   <div>
                     <ValidateNewLead
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                     />
                     {status === "sending" && <div style={{ color: "blue" }}>Enviando Dados...</div>}
                     {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                     {status === "success" && <div style={{ color: "green" }}> Voce foi cadastrado com sucesso ! </div>}
                 </div>
               )}
              />
          </div>
      )
   }
   
   export default MailchimpFormSubscribe;