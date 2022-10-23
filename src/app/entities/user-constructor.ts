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

//TODO: Constructor Kullanımı - Daha Kısa Kullanımı
export class UsersShortUsing {    
    constructor(public name: string,public surname: string,public email: string,public address: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
    }
}