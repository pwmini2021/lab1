import {data} from "../data/data";

export const sumTeacherAges = (teachers: typeof data) => (
    teachers.reduce(
        ((previousValue, currentValue) => previousValue + currentValue.teacherAge), 0
    )
)