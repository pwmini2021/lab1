import {square, startsWithM} from "./service";
import {numbers, students} from "../data/data";

test('startsWithM acceptance test', () => {
    const result = startsWithM(students);

    expect(result.length).toBe(2);
    expect(result).toContain("Mark");
    expect(result).toContain("Martha")
});

//---------------------------------------------------------

test('square acceptance test', () => {
    const result = square(numbers);

    expect(result.length).toBe(4);
    expect(result[0]).toBeCloseTo(1.41, 0.01);
    expect(result[1]).toBeCloseTo(2.23, 0.01);
    expect(result[2]).toBeCloseTo(2.82, 0.01);
    expect(result[3]).toBeCloseTo(3.16, 0.01)
});
