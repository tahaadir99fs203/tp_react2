import React from "react";
import CoursesList from "./courselist";
import EnrollementForm from "./enrollementform";
import { countEnrollementsByCourse } from "./enrollementutil";

export default function CoursesPage({ courses, students, enrollments, addCourse, updateCourse, deleteCourse, enrollStudent }) {
    const counts = countEnrollementsByCourse(enrollments);

    return (
        <div>
            <h3>Gestion des cours</h3>
            <div style={{display:"flex", gap:16}}>
                <div style={{flex:2}}>
                    <CoursesList courses={courses} counts={counts} onEdit={updateCourse} onDelete={deleteCourse} />
                </div>
                <div style={{flex:1}}>
                    <h4>Inscrire etudiant</h4>
                    <EnrollementForm students={students} courses={courses} onEnroll={enrollStudent} />
                </div>
            </div>
        </div>
    );
}