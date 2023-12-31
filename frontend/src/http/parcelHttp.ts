import { ParcelModel } from "../types/parcelModel";

export const getParcelById =async (id:string) : Promise<ParcelModel> => {
    const url = `http://localhost:9090/api/parcel/${id}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Посилку не знайдено!");
    }

    const responseJSON = await response.json();
    return responseJSON;
}

export const getUserParcels =async (id: string | undefined) => {
    if(!id){
        throw new Error("Parcel wasn`t found!");
    }

    const url = `http://localhost:9090/api/parcel/customer/${id}`;

    const response = await fetch(url);
    

    if(!response.ok){
        throw new Error("Parcel wasn`t found!");
    }

    const responseJSON = await response.json();
    return responseJSON;
}

export const calculateParcelPrice = async (distance: string, type: string, weight: string, side: string, itemPrice: string, abroad: boolean) => {
    const url = `http://localhost:9090/api/parcel/calculate/price?distance=${distance}&type=${type}&weight=${weight}&side=${side}&itemPrice=${itemPrice}&abroad=${abroad}`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    const responseJSON = await response.json();
    return responseJSON;
    
}