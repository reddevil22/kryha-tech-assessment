import { readFileSync } from 'fs';
import { BingoSystem } from './classes/BingoSystem';

const lines = readFileSync(__dirname + '/boards.txt').toString().split('\n').map((r) => r.trim());

if (lines) {
    const bingoSystem = new BingoSystem(lines)

    console.log('Winning score:', bingoSystem.run())
}