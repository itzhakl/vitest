//1
export function strLength(str: string): number {
    return str.length;
};

//2
export function isPolindrome(str: string): boolean {
    const lowered = str.toLowerCase();
    const reversed = lowered.split('').reverse().join('');
    return lowered === reversed;
};

//3
export function arrangeArr(arr: number[]): number[] {
    return arr.sort();
};

//4
export function sqrt(num: number): number {
    return num ** 0.5;
};

//5
export function sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

//6
export async function fetchUserData(userId: number) {
    const fetching = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await fetching.json();
    return data;
};

//7
export function fibonacci(arr: number[]): number {
    const fib = [0, 1];
    for (let i = 2; i < arr.length; i++) {
        const a = fib[i - 1];
        const b = fib[i - 2];
        fib.push(a + b);
    };
    if (fib !== arr) {
        throw new Error('the arr you provide is not a fiboncci');
    };
    return arr[arr.length - 1] + arr[arr.length - 2];
}
