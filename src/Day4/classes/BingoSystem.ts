import { BingoBoard } from "./BingoBoard";

export class BingoSystem {
    draws: number[];
    boards: BingoBoard[];
    currentDrawIdx: number = -1;

    constructor(input: string[]) {
        this.draws = input[0].split(',').map(Number);

        const numberOfBoards = input.filter((r) => r === '').length;
        this.boards = Array.from(
            { length: numberOfBoards },
            (_, idx) =>
                new BingoBoard(
                    input.slice(
                        idx * 5 + 2 + idx,
                        idx * 5 + 5 + 2 + idx,
                    ),
                ),
        );
    }

    run(): number {
        while (true) {
            const score = this.drawNumber();

            if (score !== null) {
                return score;
            }
        }
    }

    runToLose(): number {
        return this.draws.reduce((lastWinningScore) => {
            const score = this.drawNumber(true);

            return score === null ? lastWinningScore : score;
        }, 0);
    }

    drawNumber(removeWinner: boolean = false): number | null {
        this.currentDrawIdx++;
        
        this.boards.forEach((board) => {
            board.markDrawnNumber(this.draws[this.currentDrawIdx])
        });
        
        const winningBoard = this.boards.find((board) => board.checkForWinningBoard());
        let winningScore = null;

        if (winningBoard) {
            winningScore = winningBoard.score(this.draws[this.currentDrawIdx]);
        }

        if (removeWinner) {
            this.boards = this.boards.filter((board) => !board.checkForWinningBoard());
        }

        return winningScore;
    }
}
