import { useEffect, useState } from "react";

import axios from "axios";
import SubContactFormType from "../types/SubContactForm";


function SubContactForm(){

   
    const[name,setName]= useState<string>("");
    const[message,setMessage]= useState<string>("");
    const[email,setEmail]=useState<string>("");
    const[subject,setSubjet]= useState<string>("");
   

    async function send(){
        await axios.post("http://localhost:8000/api/contact",{
            name:name,
            message:message,
            subject:subject,
            email:email
        });
        setSubjet("");
        setMessage("");
        setName("");
        setEmail("");
        alert("your contact is successful")
    }

   

    function handleMessage(event:any){
        setMessage(event.target.value);
    }

    function handleSubject(event:any){
        setSubjet(event.target.value);
    }

   

    function handleName(event:any){
        setName(event.target.value);
    }

    function handleEmail(event:any){
        setEmail(event.target.value);
    }
  

    return(
        
        

        

        <div className="w-[550px] border border-slate-200 px-4 py-3 rounded-lg shadow-2xl ">
           

            <label className="text-sm text-slate-600 block mb-3">Enter  Message</label>
            <textarea className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={message}  onChange={handleMessage}/>

            <label className="text-sm text-slate-600 block mb-3">Enter your name</label>
            <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={name}  onChange={handleName}/>


            <label className="text-sm text-slate-600 block mb-3">Email Address</label>
            <input type="email" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={email}  onChange={handleEmail}/>

            <label className="text-sm text-slate-600 block mb-3">Enter Subject</label>
            <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={subject}  onChange={handleSubject}/>

           


           



            <button className="py-2 px-3 rounded-lg bg-slate-800 text-white hover:bg-slate-950" onClick={send}>Send</button>

        </div>

    

    )
}

export default SubContactForm;