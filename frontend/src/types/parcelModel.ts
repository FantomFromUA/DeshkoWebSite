import { CustomerModel } from "./customerModel";
import { DepartmentModel } from "./departmentModel";

export interface ParcelModel{
    number: string,
    customer: CustomerModel,
    dispatcher: CustomerModel,
    department: DepartmentModel,
    status: string,
    dateOfShipment: Date,
    dateOfReceiving: Date
}