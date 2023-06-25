import { CustomerModel } from "../types/customerModel";
import { RegistrationCustomerModel } from "../types/registrationCustomerModel";

export const checkIfValidRegestration =async (phone: string, email : string, login: string) : Promise<String> => {
    const url = `http://localhost:9090/api/customer/registration/ifExist`;
    const requestOptions = {
        method: "GET",
        headers: {
            email,
            phone,
            login
        }
    }

    const response = await fetch(url, requestOptions);
    console.log(response);
    
    if(!response.ok){
        throw new Error("Юзер з такими даними вже існує");
    }

    return "ok";
}

export const registration = async (customer : RegistrationCustomerModel) : Promise<CustomerModel> => {
    const url = `http://localhost:9090/api/customer`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(customer)
    }

    const response = await fetch(url, requestOptions);
    if(!response.ok){
        throw new Error("Щось пішло не так");
    }
    const responseJSON = await response.json();

    return responseJSON;
}