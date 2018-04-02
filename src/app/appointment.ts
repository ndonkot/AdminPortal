import { User } from "./User";

export interface Appointment
{
    id:number;
    date:string
    location:string
    description:string;
    confirmed: boolean;
    user:User[];
}