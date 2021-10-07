export const startsWithM = (strings: Array<string>) => {
    return strings.filter(value => value.startsWith("M"));
}

export const square = (numbers: Array<number>) => (
    numbers.map(Math.sqrt)
) // notation `() => (x)` is the same as notation () => {return x;}