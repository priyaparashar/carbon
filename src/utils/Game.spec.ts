import { generateGrid } from "./Game"

describe('game of life', () => {
    test('should first', () => {
        expect(true).toEqual(true)
    })
    test('should generate grid', () => {
        expect(generateGrid(3, 4)).toEqual([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])
    })

})
