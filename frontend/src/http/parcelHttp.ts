import { ParcelModel } from "../types/parcelModel";

export const getParcelById =async (id:string) : Promise<ParcelModel> => {
    const url = `http://localhost:9090/api/parcel/${id}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Parcel wasn`t found!");
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