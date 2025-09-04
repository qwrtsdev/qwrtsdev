function getFullYear() {
    return new Date().getFullYear();
}

function getDayCount() {
    const start: Date = new Date("2004-11-13");
    const today: Date = new Date();

    const diffTime: number = today.getTime() - start.getTime();
    const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

export { getFullYear, getDayCount };