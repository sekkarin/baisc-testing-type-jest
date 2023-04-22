import { assert } from "console";
import { getStringInfo, toUpperCase } from "../utils";

describe('Utils test suite', () => {
    it('should return uppercase', () => {
        // arrange เตรียมข้อมูล
        const sut = toUpperCase;
        const expected = "ABC";

        // act กระทำ
        const actual = sut('abc');

        // assert ผลที่คาดหวัง
        expect(actual).toBe(expected)
    })
    describe('getstringInfo for arg My-String should', () => {
        
        test('return right length', () => {
            const actual = getStringInfo('My-String')
            expect(actual.charaters).toHaveLength(9)
        })
        test('return right lower case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.lowerCase).toBe('my-string')
        })
        test('return right upper case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.upperCase).toBe('MY-STRING')
        })
        test('return right charecters', () => {
            const actual = getStringInfo('My-String')
            expect(actual.charaters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
            expect(actual.charaters).toContain<string>('M') // เช็คข้อมูลใน array 
            expect(actual.charaters).toEqual(expect.arrayContaining(['M', 'y', '-', 'S', 't', 'r', 'i', 'g', 'n']))
        })
        test('return right definded extra info', () => {
            const actual = getStringInfo('My-String')
            expect(actual.extraInfo).not.toBe(undefined)
            expect(actual.extraInfo).not.toBeUndefined()
            expect(actual.extraInfo).toBeDefined()
            expect(actual.extraInfo).toBeTruthy()
        })
    })
    // it.only('should return info for valid string', () => {
    //     const actual = getStringInfo('My-String');

    //     expect(actual.lowerCase).toBe('my-string')
    //     expect(actual.upperCase).toBe('MY-STRING')
    //     expect(actual.extraInfo).toEqual({})
    //     expect(actual.charaters.length).toBe(9)
    //     expect(actual.charaters).toHaveLength(9)



    // })
})