export class Fish {
    age: number = -1;

    constructor(age: number) {
        this.age = age;
    }

    decrementLife() {
        this.age--;
    }

    setAge(age: number) {
        this.age = age
    }
}