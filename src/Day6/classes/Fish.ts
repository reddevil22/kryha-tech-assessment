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

export const howManyFish = (fishes: Fish[], days: number) => {
    const arr = fishes;
    for (let index = 0; index < days; index++) {
        arr.forEach(fish => {
            if (fish.age === 0) {
                arr.push(new Fish(8))
                fish.setAge(6);
            }
            else fish.decrementLife()
        })
    }

    return arr.length;
}