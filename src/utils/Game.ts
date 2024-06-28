export function generateGrid(row: number, col: number) {
    return new Array(row).fill(null).map(() => new Array(col).fill(null).map(() => Math.random() > 0.5 ? 0 : 1))
}