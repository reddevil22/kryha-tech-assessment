import { readFileSync } from 'fs';
import { join } from 'path';

const calculateChange = (lineChange: string[]) => {
    const [xStart, yStart] = lineChange[0].split(',').map(value => Number(value));
    const [xEnd, yEnd] = lineChange[1].split(',').map(value => Number(value));
    const change = {
        x: xEnd - xStart,
        y: yEnd - yStart,
    }
    return change;
}

const input = readFileSync(join(__dirname, '..', 'vents.txt'), 'utf-8')
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

console.log("🚀 ~ file: index.ts ~ line 16 ~ input", input)

const vents = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
console.log("🚀 ~ file: index.ts ~ line 41 ~ vents", vents)


const coord = input[0].split('->').map(coord => coord.trim())[0].split(',').map(value => Number(value));
console.log("🚀 ~ file: index.ts ~ line 44 ~ coord", coord)

// console.log('change', calculateChange(input[0].split('->').map(coord => coord.trim())))

vents.forEach((row, i) => {
    row.forEach((point, j) => {
        if (i === coord[1] && j === coord[0]) {
            vents[i][j]++
        }
    })
})

console.log("🚀 ~ file: index.ts ~ line 41 ~ vents", vents)