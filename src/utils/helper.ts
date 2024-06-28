interface Day {
    day: number
    hr: number
}

export function calculate(arr: Day[]): number {
    let totalHours = 0
    for (let x in arr) {
        totalHours = arr[x].hr + totalHours
    }
    return totalHours
}

export function add2(num: number): number {
    return num + 2;
}

(function createCounter() {
    let count = 0;
    return function counter() {
        count = count + 1;
        console.log(count);
        return count;
    }
})()()
