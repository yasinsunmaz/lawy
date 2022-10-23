//TODO: Model-Constructor Kullanımı
export class UserItem {
    constructor(public name: string, public surname: string, public email: string, public address: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
    }
}