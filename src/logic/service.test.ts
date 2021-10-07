import {square, startsWithM} from "./service";

test('startsWithM filters names starting with M', () => {
    const strings = ["Michał", "Ania", "Kazik", "Martyna"];

    const result = startsWithM(strings);

    expect(result.length).toBe(2);
    expect(result).toContain("Michał");
    expect(result).toContain("Martyna")
});

test('startsWithM is case sensitive', () => {
    const strings = ["Michał", "mama"];

    const result = startsWithM(strings);

    expect(result.length).toBe(1);
    expect(result).toContain("Michał");
    expect(result).not.toContain("mama")
});

test('startsWithM handles empty array correctly', () => {
    const strings: Array<string> = [];

    const result = startsWithM(strings);

    expect(result.length).toBe(0);
    expect(result).toBeInstanceOf(Array)
});

//---------------------------------------------------------

test('square produces square root of values', () => {
    const numbers = [1, 4, 5, 10];

    const result = square(numbers);

    expect(result.length).toBe(4);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);
    expect(result[2]).toBeCloseTo(2.23, 0.01);
    expect(result[3]).toBeCloseTo(3.16, 0.01)
});

test('square handles empty array correctly', () => {
    const numbers: Array<number> = [];

    const result = square(numbers);

    expect(result.length).toBe(0);
    expect(result).toBeInstanceOf(Array)
});
