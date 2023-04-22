import { assert } from "console";
import { toUpperCase } from "../utils";

describe('Utils test suite',()=>{


    test('should return uppercase',()=>{
        // const result = toUpperCase("abc");
        // arrange เตรียมข้อมูล
        const sut = toUpperCase;
        const expected = "ABC";

        // act กระทำ
        const actual = sut('abc');

        // assert ผลที่คาดหวัง
        expect(actual).toBe(expected)
    })
})