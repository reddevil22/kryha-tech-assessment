import { readFileSync } from 'fs';
import { join } from 'path';

const lanternFish = readFileSync(join(__dirname, '..', 'fish.txt'), 'utf-8')
    .toString()
    .trim()
    .split(',')
    .map((r) => Number(r));

class Fish {
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

let fishes = lanternFish.map(fish => new Fish(fish))

for (let index = 0; index < 80; index++) {
    fishes.forEach(fish => {
        if (fish.age === 0) {
            fishes.push(new Fish(8))
            fish.setAge(6);
        }
        else fish.decrementLife()
    })
}
console.log("🚀 ~ file: index.ts ~ line 22 ~ fish", fishes.length)
