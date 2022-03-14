import { readFileSync } from 'fs';
import { join } from 'path';
import { Fish, howManyFish } from './classes/Fish';

const lanternFish = readFileSync(join(__dirname, '..', 'fish.txt'), 'utf-8')
    .toString()
    .trim()
    .split(',')
    .map((r) => Number(r));

let fishes = lanternFish.map(fish => new Fish(fish))

/* for (let index = 0; index < 80; index++) {
    fishes.forEach(fish => {
        if (fish.age === 0) {
            fishes.push(new Fish(8))
            fish.setAge(6);
        }
        else fish.decrementLife()
    })
} */
console.log("Part 1: How many fish after 80 days?", howManyFish(fishes, 80))
// console.log("Part 1: How many fish after 256 days?", howManyFish(fishes, 256))
