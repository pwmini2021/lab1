import {data} from "../data/data";

export const sumTeacherAges = (teachers: typeof data) => (
    teachers.reduce(
        ((previousValue, currentValue) => previousValue + currentValue.teacherAge), 0
    )
)

const getActiveTeachers = (teachers: typeof data) => (
    teachers.filter(teacher => teacher.active)
)

export const sumActiveTeachersAges = (teachers: typeof data) => (
    sumTeacherAges(getActiveTeachers(teachers))
)