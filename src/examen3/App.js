import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CoursesPage from "./coursepage";
import CourseDetail from "./coursedetail";

function App() {
    const [data, setData] = useState({
        courses: [{ id: 1, title: "React Basics" }],
        students: [{ id: 1, title: "Othmane" }],
        enrollments: []
    });

    const addCourse = (course) => setData(prev => ({ ...prev, courses: [...prev.courses, { ...course, id: Date.now() }] }));
    const updateCourse = (id, changes) => setData(prev => ({ ...prev, courses: prev.courses.map(c => c.id === id ? { ...c, ...changes } : c) }));
    const deleteCourse = (id) => setData(prev => ({ ...prev, courses: prev.courses.filter(c => c.id !== id), enrollments: prev.enrollments.filter(e => e.courseId !== id) }));
    const enrollStudent = (studentId, courseId) => setData(prev => ({ ...prev, enrollmemts: [...prev.enrollments, { id: Date.now(), studentId, courseId }] }));

    return (
        <Router>
            <header style={{padding:8, borderBottom:"1px solid #ddd"}}>
                <Link to="/">Accueil</Link>{" | "}<Link to="/courses">Cours</Link>
            </header>

            <main style={{padding:12}}>
                <Routes>
                    <Route path="/" element={<h2>Plateform e-learning</h2>} />
                    <Route path="/courses" element={<CoursesPage courses={data.courses} students={data.students} enrollments={data.enrollments} addCourse={addCourse} updateCourse={updateCourse} deleteCourse={deleteCourse} enrollStudent={enrollStudent} />} />
                    <Route path="/courses/:id" element={<CourseDetail courses={data.courses} students={data.students} enrollments={data.enrollments} enrollStudent={enrollStudent} />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;