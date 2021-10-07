import {startsWithM} from "./service";

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

