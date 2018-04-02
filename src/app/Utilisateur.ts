import { uSavingsAccount } from './uSavingsAccount';
import { uPrimaryAccount } from './uPrimaryAccount';
export class Utilisateur
{
    userId: number;
	username: string;
	firstName: string;
	lastName: string;
    email: string;
    phone: string;
    usavingsAccount: uSavingsAccount[];
    uprimaryAccount: uPrimaryAccount[];
    enabled: boolean;
}