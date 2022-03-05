export class UserPipeModel {
    name: string;
    gender: string;
    age: number;
    constructor(name: string, gender: string, age: number) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}