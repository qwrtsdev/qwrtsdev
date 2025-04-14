export default function getDayCount() {
    const start = new Date("2004-11-13");
    const today = new Date();

    // Calculate the time difference in milliseconds
    const diffTime = today.getTime() - start.getTime();

    // Convert milliseconds to days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}