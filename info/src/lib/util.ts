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
