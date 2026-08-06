import React, { useState } from "react";

export default function EnrollementForm({ students, courses, onEnroll }) {
    const [studentId, setStudentId] = useState(students[0]?.id || "");
    const [courseId, setCourseId] = useState(courses[0]?.id || "");

    const submit = (e) => {
        e.preventDefault();
        if (!studentId || !courseId) return;
        onEnroll(Number(studentId), Number(courseId));
    };

    return (
        <form onSubmit={submit}>
            <div>
                <label>Etudiant</label><br />
                <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
                    {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
            </div>

            <div>
                <label>Cours</label><br />
                <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                    {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                </select>
            </div>

            <div style={{marginTop:8}}>
                <button type="submit">Inscrire</button>
            </div>
        </form>
    );
}