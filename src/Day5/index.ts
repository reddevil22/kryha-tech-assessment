import { readFileSync } from 'fs';
import { join } from 'path';

const calculateChange = (lineChange: string[]) => {
    let [xStart, yStart] = lineChange[0].split(',').map(value => Number(value));
    let [xEnd, yEnd] = lineChange[1].split(',').map(value => Number(value));

    const change = {
        x: xEnd - xStart,
        y: yEnd - yStart,
    }

    const xChanges = [];
    if (xEnd - xStart !== 0 || xStart - xEnd !== 0) {
        if (change.x > 0) {
            for (let index = 0; index <= change.x; index++) {
                xChanges.push([xStart++, yStart])
            }
        }
        else {
            for (let index = 0; index <= Math.abs(change.x); index++) {
                xChanges.push([xEnd++, yStart])
            }
        }
    }

    const yChanges = [];
    if (yEnd - yStart !== 0 || yStart - yEnd !== 0) {
        if (change.y > 0) {
            for (let index = 0; index <= change.y; index++) {
                yChanges.push([xStart, yStart++])
            }
        }
        else {
            for (let index = 0; index <= Math.abs(change.y); index++) {
                yChanges.push([xStart, yEnd++])
            }
        }
    }

    if (xChanges.length > 0) {
        return xChanges;
    }
    else if (yChanges.length > 0) {
        return yChanges;
    }
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

const changes = input.map(line => {
    return calculateChange(line.split('->').map(coord => coord.trim()))
})

//@ts-ignore
const maxX = Math.max(...changes.map(x => x.map(a => a[0])).flat(2))
//@ts-ignore
const maxY = Math.max(...changes.map(x => x.map(a => a[0])).flat(2))
const dynamicVents = new Array(maxX + 1).fill(0).map(() => new Array(maxY + 1).fill(0));

changes.flat(1).forEach(change => {
    if (change) dynamicVents[change[1]][change[0]]++
})

console.log("how many points do at least two lines overlap?: ", dynamicVents.flat(2).filter(point => point >= 2).length)