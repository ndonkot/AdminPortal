import { SavingsAccount } from './SavingsAccount';
import { PrimaryAccount } from './PrimaryAccount';
export interface User
{
    userId: number;
	username: string;
	firstName: string;
	lastName: string;
    email: string;
    phone: string;
    savingsAccount: SavingsAccount[];
    primaryAccount: PrimaryAccount["accountBalance"];
	enabled: boolean;
}