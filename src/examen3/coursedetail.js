import React from "react";
import { useParams, Link } from "react-router-dom";

export default function CourseDetail({ courses, students, enrollments, enrollStudent }) {
    const { id } = useParams();
    const cid = Number(id);
    const course = courses.find(c => c.id === cid);
    if (!course) return <div>Course not found. <Link to="/courses">Retour</Link></div>;

    const enrolledStudents = enrollments.filter(e => e.courseId === cid).map(e => students.find(s => s.id === e.studentId));

    return (
        <div>
            <h3>{course.title}</h3>
            <h4>Etudiants Inscrits</h4>
            <ul>
                {enrolledStudents.length === 0 ? <li>Aucun</li> : enrolledStudents.map(s => <li key={s.id}>{s.name}</li>)}
            </ul>
            <p><Link to="/courses">Retour</Link></p>
        </div>
    );
}