//TODO: Model-Constructor Kullanımı
import { UserItem } from "./user-item-model";

export class UserModel {
    name: string;
    surname: string;
    userItems: UserItem[];
    constructor() {
        this.name = "Yasin";
        this.surname = "Sunmaz";
        this.userItems = [
            { name: "Üye 1", surname: "Sunmaz", email: "uye1@yasinsunmaz.com", address: "AYDIN" },
            { name: "Üye 2", surname: "Sunmaz", email: "uye2@yasinsunmaz.com", address: "İZMİR" },
            { name: "Üye 3", surname: "Sunmaz", email: "uye3@yasinsunmaz.com", address: "ANKARA" },
            { name: "Üye 4", surname: "Sunmaz", email: "uye4@yasinsunmaz.com", address: "AYDIN" },
        ]
    }

    getLiveInAydin(): UserItem[] {
        return this.userItems.filter(i => i.address == "AYDIN");
    }

}