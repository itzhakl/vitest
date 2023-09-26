import { describe, expect, test } from 'vitest';
import { strLength, isPolindrome, arrangeArr, sqrt, sumArray, fetchUserData, fibonacci } from './code';

// describe('code', () => {
// });

//1
test('strLength', () => {
    const str = 'itzhak';
    const result = strLength(str);
    expect(result).toBe(6)
});

//2
test('isPolindrom', () => {
    const str = 'ghtsthg';
    const poli = isPolindrome(str);
    expect(poli).toBe(true)
});

//3
test('arrangeArr', () => {
    const unsorted = [5, 2, 4, 1, 3];
    const sorted = [1, 2, 3, 4, 5];
    const check = arrangeArr(unsorted);
    expect(check).toEqual(sorted);
});

//4
test('sqrt', () => {
    const number = 25;
    const result = sqrt(number);
    expect(result).toBe(5);
});

//5
test('equalTo', () => {
    const arr = [4, 7, 9, 2, 3];
    const result = sumArray(arr);
    expect(result).toBe(25);
});

test('greatharThan', () => {
    const arr = [4, 7, 9, 2, 3];
    const result = sumArray(arr);
    expect(result).toBeGreaterThan(9);
});

//6
test('fetchUserData', async () => {
    const userId = 7;
    const data = await fetchUserData(userId);
    const result = data.id;
    expect(result).toBe(userId);
});

//7
test('fibonacci',() => {
    const fibArr = [0, 1, 1, 2, 3];
    const result = fibonacci(fibArr);
    expect(result).toBe(5);
});



