export function calculateProjectProgress(projectId, tasks) {
    const t = tasks.filter(x => x.projectId === projectId);
    if (t.length === 0) return 0;
    const done = t.filter(x => x.status === "done").length;
    return Math.round((done / t.length) * 100);
}