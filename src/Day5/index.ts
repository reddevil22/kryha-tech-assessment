import { readFileSync } from 'fs';
import { join } from 'path';
import { calculateChange, calculateDiagonalLineChange } from './utils/utils';

const inputPart1 = readFileSync(join(__dirname, '..', 'vents.txt'), 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map((r) => r.trim())
    .filter(line => {
        const segment = line.split('->').map(coord => coord.trim());
        const [xStart, yStart] = segment[0].split(',').map(value => Number(value));
        const [xEnd, yEnd] = segment[1].split(',').map(value => Number(value));
        return (xStart === xEnd || yStart === yEnd);
    });

const inputPart2 = readFileSync(join(__dirname, '..', 'vents.txt'), 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map((r) => r.trim());

const changes = inputPart1.map(line => {
    return calculateChange(line.split('->').map(coord => coord.trim()))
})

//@ts-ignore
let maxX = Math.max(...changes.map(x => x.map(a => a[0])).flat(2))
//@ts-ignore
let maxY = Math.max(...changes.map(x => x.map(a => a[0])).flat(2))
let dynamicVents = new Array(maxX + 1).fill(0).map(() => new Array(maxY + 1).fill(0));

changes.flat(1).forEach(change => {
    if (change) dynamicVents[change[1]][change[0]]++
})

console.log("Part 1 - how many points do at least two lines overlap?: ", dynamicVents.flat(2).filter(point => point >= 2).length)

/* const diagonalChanges = inputPart2.map(line => {
    const segment = line.split('->').map(coord => coord.trim());
    const [xStart, yStart] = segment[0].split(',').map(value => Number(value));
    const [xEnd, yEnd] = segment[1].split(',').map(value => Number(value));
    // return (xStart === xEnd || yStart === yEnd);
    if(xStart === xEnd || yStart === yEnd) {
        const straightLineChanges = calculateChange(line.split('->').map(coord => coord.trim()));
        return straightLineChanges
    }
    else {
        const diagonalLineChanges = calculateDiagonalLineChange(line.split('->').map(coord => coord.trim()))
        return diagonalLineChanges
    }
})

//@ts-ignore
const flattenedChanges = diagonalChanges.map(x => x.map(a => a[0])).flat(2);
console.log("🚀 ~ file: index.ts ~ line 56 ~ diagonalChanges.flat(1)", diagonalChanges.flat(1)[11062])
console.log("🚀 ~ file: index.ts ~ line 56 ~ dynamicVents[985][988]", dynamicVents[985][988])
dynamicVents = new Array(flattenedChanges[0] + 1).fill(0).map(() => new Array(flattenedChanges[0] + 1).fill(0));

diagonalChanges.flat(1).forEach((change, index) => {
    // console.log("🚀 ~ file: index.ts ~ line 61 ~ diagonalChanges.flat ~ index", index)
    if (change) {
        // console.log("🚀 ~ file: index.ts ~ line 62 ~ diagonalChanges.flat ~ change", change)
        dynamicVents[change[1]][change[0]]++
    }
})
console.log("🚀 ~ file: index.ts ~ line 63 ~ diagonalChanges.flat ~ dynamicVents", dynamicVents)

console.log("Part 2 - how many points do at least two lines overlap?: ", dynamicVents.flat(2).filter(point => point >= 2).length) */