import { error } from "console";
import { EmailModel } from "../types/emailModel";

export const sendContactEmail =async (email : EmailModel) => {
    const url = "http://localhost:9090/email/contact";
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(email)
    }

    const response = await fetch(url, requestOptions);
    if(!response.ok){
        console.log(312);
        
    }
}

export const verifyAccount =async (id : any) => {
    const url = `http://localhost:9090/email/verification?id=${id}`;

    const response = fetch(url);
}