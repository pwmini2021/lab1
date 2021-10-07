import React from 'react';
import {sumTeacherAges} from "../logic/teacherLogic";
import {data} from "../data/data";

function StudentsList() {

    const teacherAgesHandler = () => {
        console.log(sumTeacherAges(data));
    }

    return (
        <div>
            List of students
            <div>
                <button onClick={teacherAgesHandler}>Sum of teachers ages</button>
            </div>
        </div>
    );
}

export default StudentsList;
