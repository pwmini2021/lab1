import React from 'react';
import {getStudentsNames, sumActiveTeachersAges, sumTeacherAges} from "../logic/teacherLogic";
import {data} from "../data/data";

function StudentsList() {

    const teacherAgesHandler = () => {
        console.log(sumTeacherAges(data));
    }

    const activeTeacherAgesHandler = () => {
        console.log(sumActiveTeachersAges(data));
    }

    const sortedStudentsHandler = () => {
        const studentsNames = getStudentsNames(data);
        studentsNames.sort();
        console.log(studentsNames);
    }


    return (
        <div>
            List of students
            <div>
                <button onClick={teacherAgesHandler}>Sum of teachers ages</button><br/>
                <button onClick={activeTeacherAgesHandler}>Sum of active teachers ages</button><br/>
                <button onClick={sortedStudentsHandler}>All students sorted alphabetically</button>
            </div>
        </div>
    );
}

export default StudentsList;
