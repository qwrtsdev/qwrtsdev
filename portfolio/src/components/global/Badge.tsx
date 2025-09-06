export default function Badge({ text }) {
    return (
        <span className="rounded-full bg-zinc-300 px-4 py-1 text-xs font-medium text-zinc-900 md:text-lg">
            {text}
        </span>
    );
}
