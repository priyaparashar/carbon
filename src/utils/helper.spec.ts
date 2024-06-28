import { add2, calculate } from "./helper"

describe('helper', () => {
    describe('calculate', () => {

        const inputMock = [{ day: 1, hr: 8 }, { day: 2, hr: 4 }, { day: 3, hr: 1 }, { day: 4, hr: 2 }]
        test('calculate should return a number', () => {
            const result = calculate(inputMock)
            expect(typeof result).toBe('number')
        })

        test('it should return correct output for given array', () => {
            const result = calculate(inputMock)
            expect(result).toEqual(15)
        })
        test('it should return 0 for empty array', () => {
            const result = calculate([])
            expect(result).toEqual(0)
        })

        test.each([
            {
                case: 'correct input',
                input: inputMock,
                output: 15
            },
            {
                case: 'blank array',
                input: inputMock,
                output: 15
            }
        ])('should return $output for given $testCase', ({ input, output }) => {
            const result = calculate(input)
            expect(result).toEqual(output)
        })


    })

    describe('add2', () => {
        test.each`
        input | output
        ${2} | ${4}
        ${4} | ${6}
        ${6} | ${8}
        `('should return $output for $input', ({ input, output }) => {
            const result = add2(input)
            expect(result).toEqual(output)

        })
    })
})


