import { CustomerModel } from "./customerModel";
import { DepartmentModel } from "./departmentModel";

export interface ParcelModel{
    number: string,
    customer: CustomerModel,
    dispatcher: string,
    deppartment: DepartmentModel,
    status: string,
    dateOfShipment: Date,
    dateOfReceiving: Date
}