export default function Badge({ type }) {
    switch (type) {
        case "open":
            return (
                <span className="me-2 rounded-sm bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Open-Source
                </span>
            );
        default:
            return (
                <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    Private
                </span>
            );
    }
}
