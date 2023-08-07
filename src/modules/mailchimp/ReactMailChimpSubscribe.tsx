// import { Button } from "@mui/material";
// import { useEffect, useState } from "react";
// import MailchimpSubscribe from "react-mailchimp-subscribe"

// interface ICustomFormProps {
//     status: any;
//     message: any;
//     onValidated(data:any): any;   
// }

// const CustomForm: React.FC<ICustomFormProps> = ({ status, message, onValidated }) => {

//     // const {modalOpen, setModalOpen} = useGHStContext();

//     console.log("[CustomForm] [status] - ",status); 
//     console.log("[CustomForm] [message] - ",message); 


//     const [name,setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone,setPhone] = useState('');

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');


//     const handleSubmit = (e:any) => {
//         e.preventDefault();

//         const payload = {
//             FNAME: name,
//             EMAIL: email,
//             PHONE: phone,
//         }
//         console.log("handleSubmit ... ", payload)
//         email && name && phone && email.indexOf("@") > -1 && onValidated(payload)
//     }

//     useEffect(() => {
//         if(status === "success") clearFields();
//         // if(modalOpen && status === "success") clearFields();
//     }, [status]) // , modalOpen

//     const clearFields = () => {
//         setFirstName('');
//         setLastName('');
//         setEmail('');
//     }


//     return (
//         <form
//             className="mc__form"
//             onSubmit={(e) => handleSubmit(e)}
//         >
//             <h3 className="mc__title">
//                 {status === "success" ? "Success!" :
//                     "Join our email list for future updates."}
//             </h3>

//             {status === "sending" && (
//                 <div className="mc__alert mc__alert--sending">sending...</div>
//             )}
//             {status === "error" && (
//                 <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }}/>
//             )}
//             {status === "success" && (
//                 <div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: message }}/>
//             )}

//             {status !== "success" ? (
//                 <div className="mc__field-container">
//                     {/* <InputField
//                         label="First Name"
//                         onChangeHandler={setFirstName}
//                         type="text"
//                         value={firstName}
//                         placeholder="Jane"
//                         isRequired
//                     /> */}
//                 <input
//                     className="inputField__field"
//                     type="text"
//                     name={"name"}
//                     placeholder="Jane Teste"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required={true}
//                 />



//                     {/* <InputField
//                         label="Last Name"
//                         onChangeHandler={setLastName}
//                         type="text"
//                         value={lastName}
//                         placeholder="Doe"
//                         isRequired
//                     /> */}

//                 <input
//                     className="inputField__field"
//                     type="text"
//                     name={"email"}
//                     placeholder="teste@gmail.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required={true}
//                 />


//                     {/* <InputField
//                         label="Email"
//                         onChangeHandler={setEmail}
//                         type="email"
//                         value={email}
//                         placeholder="your@email.com"
//                         isRequired
//                     /> */}

//                 <input
//                     className="inputField__field"
//                     type="text"
//                     name={"phone"}
//                     placeholder="+55 (92) 9 8841 0440"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required={true}
//                 />


//                 </div>
//             ) : null}

//             {/*Close button appears if form was successfully sent*/}
//             {
//                 status === 'success' ? (<></>) : <Button
//                         // label="subscribe"
//                         type={"submit"}
//                         variant={"contained"}
//                     // formValues={[email, firstName, lastName]}
//                 >subscribe</Button>

//             }
//         </form>
//     );
// };

// const MailchimpForm: React.FC = () => {
// // https://agenciadoresdesucesso.us21.list-manage.com/subscribe/post?u=523ee83a19f69e627141813d7&amp;id=081e7a3742&amp;f_id=00382ee7f0"
   
//    const url_base = "https://agenciadoresdesucesso.us21.list-manage.com/subscribe/post"
//    const url_u = "523ee83a19f69e627141813d7"
//    const url_id_ = "081e7a3742"

// //  const url = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
//     const url = `${url_base}?u=${url_u}&id=${url_id_}`;
//    console.log("[MailchimpForm] - url ... ", url)
//     return (

//        <div className="mc__form-container">
//            <MailchimpSubscribe
//             //    url={url}
//                url="https://agenciadoresdesucesso.us21.list-manage.com/subscribe/post?u=523ee83a19f69e627141813d7&amp;id=081e7a3742&amp;f_id=00382ee7f0"
//                render={({ subscribe, status, message }) => (
//                 <div>
//                 {/* <SimpleForm onSubmitted={formData => subscribe(formData)} /> */}
//                 <CustomForm
//                        status={status}
//                        message={message}
//                        onValidated={formData => {
//                         console.log("formData -> ", formData)
//                         console.log("subscribe -> ", subscribe)
//                         return subscribe(formData)
//                        }}
//                    />
//                 {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//                 {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//                 {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//               </div>
  
//                )}
//            />
//        </div>

//    )
// }

// export default MailchimpForm;