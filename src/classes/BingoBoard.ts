// Interface for each value on board and boolean for whether number was drawn
export interface IBoardLine {
    number: number;
    checked: boolean;
}

export class BingoBoard {
    rows: IBoardLine[][];

    constructor(input: string[]) {
        // Create board rows by mapping over each string row and changing it into an IBoardLine
        this.rows = input.map((row) =>
            row
                .split(' ')
                .map((n) => n.trim())
                .filter(Boolean)
                .map((c) => ({ number: Number(c), checked: false })),
        );
    }

    /**
     * markDraw
     * @param drawnNumber number that has been drawn
     * This method accepts a number input and marks all values on the board that match
     */
    markDrawnNumber(drawnNumber: number) {
        this.rows = this.rows.map((row) =>
            row.map((c) => ({
                ...c,
                checked: c.number === drawnNumber ? true : c.checked,
            })),
        );
    }

    /**
     * 
     * @returns true if a row or column has all been drawn
     * This method checks every row to see if all values have been drawn or checks every column to see
     * if all values have been drawn by creating a new array from the first value of every row
     *
     */
    checkForWinningBoard(): boolean {
        return (
            this.rows.some((row) => row.every((c) => c.checked)) ||
            Array.from({ length: 5 }).some((_, i) =>
                this.rows.every((row) => row[i].checked),
            )
        );
    }

    /**
     * 
     * @param draw number that has been drawn
     * @returns the final score
     * This method calculates the score by using Array.reduce to sum up all the board values that have not been check
     * This method should be executed when a winning board is found
     */
    score(draw: number): number {
        const sumOfUnchecked = this.rows.reduce((acc, row) => {
            return (
                acc +
                row.reduce((acc, c) => {
                    return acc + (!c.checked ? c.number : 0);
                }, 0)
            );
        }, 0);

        return sumOfUnchecked * draw;
    }
}