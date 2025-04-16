// components/Timeline.tsx
export default function Timeline() {
    const achievements = [
        {
            year: 2567,
            title: "รองชนะเลิศอันดับ 1",
            description: "การแข่งขันพัฒนา WebApp\nนวัตกรรม เทคโนโลยี 46ICT",
        },
        {
            year: 2566,
            title: "dfdfdf",
            description: "dfdfdf",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h2 className="mb-10 text-3xl font-bold">Achievements</h2>
            <div className="relative ml-5 border-l-2 border-blue-200">
                {achievements.map((item, index) => (
                    <div key={index} className="relative mb-16 ml-6">
                        {/* Timeline dot */}
                        <div className="absolute -left-[37] top-1 z-10 h-6 w-6 rounded-full border-4 border-blue-400 bg-white"></div>

                        {/* Year */}
                        <div className="absolute -left-[85] top-1 font-bold text-blue-500">
                            {item.year}
                        </div>

                        {/* Content Card */}
                        {item.title && (
                            <div className="max-w-md rounded-lg border border-gray-100 bg-white p-4 shadow-md">
                                <div className="mb-1 flex items-center gap-2">
                                    <span>🥇</span>
                                    <h3 className="text-lg font-bold">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="whitespace-pre-line text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
