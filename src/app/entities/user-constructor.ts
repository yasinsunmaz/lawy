//TODO: Constructor Kullanımı
export class Users {
    name: string;
    surname: string;
    email: string;
    address: string;
    constructor(nameP: string, surnameP: string, emailP: string, addressP: string) {
        this.name = nameP;
        this.surname = surnameP;
        this.email = emailP;
        this.address = addressP;
    }
}