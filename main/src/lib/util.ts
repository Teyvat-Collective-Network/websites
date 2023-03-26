export function debounce<T extends any[], U>(
    fn: (...args: T) => U,
    timeout: number = 500,
): (...args: T) => void {
    let timer: NodeJS.Timeout;

    return (...args: T) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), timeout);
    };
}

export function fix(x: any): any {
    if (Array.isArray(x)) return x.map((k) => fix(k));

    delete x._id;
    return x;
}

export function without(array: any[], index: number) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function swap(array: any[], x: number, y: number): any[] {
    if (x === y) return array;
    if (x > y) return swap(array, y, x);
    return [
        ...array.slice(0, x),
        array[y],
        ...array.slice(x + 1, y),
        array[x],
        ...array.slice(y + 1),
    ];
}
