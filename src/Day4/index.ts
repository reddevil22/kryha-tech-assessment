import { readFileSync } from 'fs';
import { BingoSystem } from './classes/BingoSystem';

const lines = readFileSync(__dirname + '/..' + '/boards.txt').toString().split('\n').map((r) => r.trim());

if (lines) {
    const bingoSystem = new BingoSystem(lines)

    console.log('Part 1:', bingoSystem.run())
    console.log('Part 2:', bingoSystem.runToLose())
}