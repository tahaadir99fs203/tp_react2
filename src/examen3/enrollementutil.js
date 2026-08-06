export function countEnrollementsByCourse(enrollments) {
    return enrollments.reduce((acc, e) => {
        acc[e.courseId] = (acc[e.courseId] || 0) + 1;
        return acc;
    }, {});
}